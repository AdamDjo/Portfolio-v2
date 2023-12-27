import useAnimate from '@/src/hooks/useAnimate';
import './_contact.scss';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
export const Contact = () => {
  const { ref, mainControls } = useAnimate();
  const t = useTranslations('Footer');
  return (
    <motion.section
      id="contact"
      className="contact-section"
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
      <span className="liner"></span>
      <p className="subtitle">
        <span>0.4.</span>
        {t('title')}
      </p>
      <h2>{t('subTitle')}</h2>
      <p className="description">{t('description')}</p>
      <a href="mailto:=adam.ben.messaoud@outlook.fr">
        <button>{t('sayHi')} </button>
      </a>
    </motion.section>
  );
};
