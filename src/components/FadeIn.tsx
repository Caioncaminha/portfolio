import React, { type PropsWithChildren, useEffect, useState } from "react";

interface Props {
  delay?: number;
  transitionDuration?: number;
  // Usamos React.ElementType para aceitar tags HTML (string) ou componentes (function)
  wrapperTag?: React.ElementType;
  childTag?: React.ElementType;
  className?: string;
  childClassName?: string;
  visible?: boolean;
  // onComplete pode ser void
  onComplete?: () => void;
}

export default function FadeIn(props: PropsWithChildren<Props>) {
  const [maxIsVisible, setMaxIsVisible] = useState(0);
  const transitionDuration = props.transitionDuration || 400;
  const delay = props.delay || 50;

  // Use React.ElementType para atribuir sem 'as any'
  const WrapperTag = (props.wrapperTag || "div") as React.ElementType;
  const ChildTag = (props.childTag || "div") as React.ElementType;

  // Corrigido o tipo do Ref para aceitar HTMLElement (mais seguro que 'any')
  const wrapperRef = React.useRef<HTMLElement>(null);

  const [inView, setInView] = useState<boolean>(true);
  const visible = typeof props.visible === "undefined" ? inView : props.visible;

  useEffect(() => {
    if (typeof props.visible === "undefined" && wrapperRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInView(true);
            } else {
              setInView(false);
              setMaxIsVisible(0);
            }
          });
        },
        { threshold: 0.15 }
      );
      observer.observe(wrapperRef.current); // Não precisa de 'as Element'
      return () => observer.disconnect();
    }
  }, [props.visible]);

  useEffect(() => {
    let count = React.Children.count(props.children);
    if (!visible) {
      count = 0;
    }

    if (count === maxIsVisible) {
      const timeout = setTimeout(() => {
        if (props.onComplete) props.onComplete();
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    const increment = count > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxIsVisible(maxIsVisible + increment);
    }, delay);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [
    // eslint-disable-next-line
    React.Children.count(props.children),
    delay,
    maxIsVisible,
    visible,
    transitionDuration,
  ]);

  return (
    // Removido o 'as any'
    <WrapperTag ref={wrapperRef} className={props.className}>
      {React.Children.map(props.children, (child, i) => {
        return (
          <ChildTag
            className={props.childClassName}
            style={{
              transition: `opacity ${transitionDuration}ms ease-out, transform ${transitionDuration}ms ease-out`,
              transform: maxIsVisible > i ? "none" : "translateY(20px)",
              opacity: maxIsVisible > i ? 1 : 0,
            }}
          >
            {child}
          </ChildTag>
        );
      })}
    </WrapperTag>
  );
}
