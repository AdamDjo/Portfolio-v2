import Image from 'next/image';
import './_banner.scss';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
export const Banner = () => {
  const t = useTranslations('Banner');
  return (
    <motion.section
      id="home"
      className="banner"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="text-banner">
        <h3>{t('subtitle')} </h3>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <p>
          {' '}
          <a href="#project">
            <span>
              {t('link')}
              <span className="liner"></span>
            </span>
          </a>
        </p>
        <div>
          <a href="#project" className="">
            <button> {t('button')}</button>
          </a>
        </div>
      </div>
      <div className="AboutImage">
        <div className="image-content">
          <Image
            src="/images/Portfolio.png"
            alt="Profile Pic"
            width={200}
            height={300}
            priority={false}
          />
        </div>
      </div>
    </motion.section>
  );
};
