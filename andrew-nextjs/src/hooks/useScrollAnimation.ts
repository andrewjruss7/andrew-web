'use client';

import React, { useEffect, useRef, useState } from 'react';

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

export function useFadeInUp() {
  const { ref, isVisible } = useScrollAnimation();
  return { ref: ref as React.RefObject<HTMLDivElement>, isVisible };
}

export function useSlideInLeft() {
  const { ref, isVisible } = useScrollAnimation();
  return { ref: ref as React.RefObject<HTMLDivElement>, isVisible };
}

export function useSlideInRight() {
  const { ref, isVisible } = useScrollAnimation();
  return { ref: ref as React.RefObject<HTMLDivElement>, isVisible };
}

export function useScaleIn() {
  const { ref, isVisible } = useScrollAnimation();
  return { ref: ref as React.RefObject<HTMLDivElement>, isVisible };
}
