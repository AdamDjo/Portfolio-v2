'use client';
import { useScroll, useSpring, motion } from 'framer-motion';
export const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return <motion.div style={{ scaleX }} />;
};
