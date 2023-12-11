import useAnimate from '@/src/hooks/useAnimate';
import { SectionTitle } from '../Layout/SectionTitle';
import { Project } from './Project';

import './_project.scss';
import { motion } from 'framer-motion';

export const Projects = () => {
  const { ref, mainControls } = useAnimate();
  return (
    <motion.section
      id="project"
      className="project-section"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <SectionTitle title="Some things I have built " titleNumber="0.3" />
      <Project></Project>

      <div className="show-more">
        <a href="https://www.behance.net/adambenmessaoud" target="_blank">
          <button> Show more!</button>
        </a>
      </div>
    </motion.section>
  );
};
