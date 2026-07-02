import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimate = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once visible to maintain animation state
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // offset slightly to trigger just before coming into view
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

  return (
    <div 
      ref={ref} 
      className={isVisible ? 'animate-fade-in-up' : ''} 
      style={{ 
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimate;
