'use client';
import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const useAnimate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);
  return { ref, mainControls, slideControls };
};

export default useAnimate;
