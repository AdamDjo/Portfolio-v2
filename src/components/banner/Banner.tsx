import Image from 'next/image';
import './_banner.scss';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
export const Banner = () => {
  const t = useTranslations('Index');
  return (
    <motion.section
      id="home"
      className="banner"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="text-banner">
        <h3>{t('title')} </h3>
        <h1>
          Adam BenMessaoud.<span> I build things for the web.</span>
        </h1>
        <p>
          I am a web developer with 2+ years of experience in Web Developement.
          I have a strong foundation in front-end & back-end development and am
          skilled in creating user-friendly and responsive web applications
          using React,Vue,NodeJs and its ecosystem.
        </p>
        <p>
          {' '}
          <a href="#project">
            <span>
              Learn More
              <span className="liner"></span>
            </span>
          </a>
        </p>
        <div>
          <a href="#project" className="">
            <button> Check out my Projects!</button>
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
