import React, {
  JSXElementConstructor,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

interface Props {
  delay?: number;
  transitionDuration?: number;
  wrapperTag?: JSXElementConstructor<any>;
  childTag?: JSXElementConstructor<any>;
  className?: string;
  childClassName?: string;
  visible?: boolean;
  onComplete?: () => any;
}

export default function FadeIn(props: PropsWithChildren<Props>) {
  const [maxIsVisible, setMaxIsVisible] = useState(0);
  const transitionDuration = props.transitionDuration || 400;
  const delay = props.delay || 50;
  const WrapperTag = props.wrapperTag || "div";
  const ChildTag = props.childTag || "div";
  // internal visibility controlled by IntersectionObserver so animations can re-run
  const wrapperRef = React.useRef<HTMLElement | null>(null as any);
  const [inView, setInView] = useState<boolean>(true);
  const visible = typeof props.visible === "undefined" ? inView : props.visible;

  useEffect(() => {
    // If no explicit visible prop was provided, observe the wrapper and toggle inView
    if (typeof props.visible === "undefined" && wrapperRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInView(true);
            } else {
              setInView(false);
              setMaxIsVisible(0); // Reset animation so it replays when re-entering viewport
            }
          });
        },
        { threshold: 0.15 }
      );
      observer.observe(wrapperRef.current as Element);
      return () => observer.disconnect();
    }
    // otherwise fall through to existing logic
  }, [props.visible]);

  useEffect(() => {
    let count = React.Children.count(props.children);
    if (!visible) {
      // Animate all children out
      count = 0;
    }

    if (count === maxIsVisible) {
      // We're done updating maxVisible, notify when animation is done
      const timeout = setTimeout(() => {
        if (props.onComplete) props.onComplete();
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    // Move maxIsVisible toward count
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
    // attach ref so IntersectionObserver can watch the element
    // @ts-ignore - wrapperRef will be an HTMLElement based on wrapperTag
    <WrapperTag ref={wrapperRef as any} className={props.className}>
      {React.Children.map(props.children, (child, i) => {
        return (
          <ChildTag
            className={props.childClassName}
            style={{
              /* A MELHORIA ESTÁ AQUI: Adicionado 'ease-out' */
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
