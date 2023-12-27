import { SectionTitle } from '../Layout/SectionTitle';
import './_about.scss';
import { AiFillThunderbolt } from 'react-icons/ai';
import { motion } from 'framer-motion';

import useAnimate from '@/src/hooks/useAnimate';
import { useTranslations } from 'next-intl';

export const About = () => {
  const { ref, mainControls } = useAnimate();
  const t = useTranslations('About');
  return (
    <motion.section
      className="AboutSection"
      id="about"
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
      <SectionTitle title="About Me" titleNumber="0.1."></SectionTitle>
      <div className="AboutContent">
        <div className="AboutText">
          <p className="description">{t('description 1')}</p>
          <p className="description">{t('description 2')}</p>
          <p className="description">{t('description 3')}</p>
          <p className="description">{t('technologies')}</p>
        </div>
        <div className="skills">
          <ul>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Javascript (ES6+)
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Vue Js
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              React Js
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Next / Nuxt Js
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              SASS / Tailwind / Bootstrap
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Node js
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Express Js
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              MongoDB
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};
