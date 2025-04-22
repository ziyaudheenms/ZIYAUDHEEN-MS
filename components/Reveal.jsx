"use client"
import { useEffect, useRef, useState } from 'react';

const Reveal = ({
  children,
  className = '',
  transitionClass = 'transition-all duration-1000 ease-out',
  hiddenClass = 'opacity-0 translate-y-8 scale-95 blur-sm',
  visibleClass = 'opacity-100 translate-y-0 scale-100 blur-0',
}) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // 🔥 Unobserve after revealing
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${transitionClass} transform ${isVisible ? visibleClass : hiddenClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;

