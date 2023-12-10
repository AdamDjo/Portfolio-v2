'use client';
import { LeftSide } from '@/src/components/Layout/LeftSide';
import '../../src/styles/pages/home.scss';
import { RightSide } from '@/src/components/Layout/RightSide';
import { Banner } from '@/src/components/banner/Banner';
import { About } from '@/src/components/About/About';
import { Experience } from '@/src/components/Experiences/Experience';
import { Projects } from '@/src/components/projects/Projects';
import { Contact } from '@/src/components/Contact/Contact';
import { Footer } from '@/src/components/Footer/Footer';
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <main>
      <div className="left-layout">
        <LeftSide></LeftSide>
      </div>
      <motion.div
        className="body-layout"
        id="home"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Banner></Banner>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </motion.div>
      <div className="right-layout">
        <RightSide />
      </div>
    </main>
  );
}
