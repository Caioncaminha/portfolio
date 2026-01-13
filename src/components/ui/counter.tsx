"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  value: number;
  direction?: "up" | "down";
  className?: string;
}

export function Counter({ value, direction = "up", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: false, margin: "-10px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    } else {
      // Reset to start value when out of view
      motionValue.set(direction === "down" ? value : 0);
    }
  }, [isInView, value, direction, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest)
        );
      }
    });
  }, [springValue]);

  return <span className={className} ref={ref} />;
}
