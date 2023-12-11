import useAnimate from '@/src/hooks/useAnimate';
import './_contact.scss';
import { motion } from 'framer-motion';
export const Contact = () => {
  const { ref, mainControls } = useAnimate();
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
        <span>0.4.</span>What s Next?
      </p>
      <h2>Get In Touch</h2>
      <p className="description">
        Thank you for taking the time to explore my portfolio. If you have any
        questions, opportunities, or just want to say hello, I d love to hear
        from you. Feel free to reach out through the contact form below or
        connect with me on social media. I m always open to collaborations and
        new experiences. Looking forward to connecting with you!
      </p>
      <a href="mailto:=adam.ben.messaoud@outlook.fr">
        <button>Say Hello! </button>
      </a>
    </motion.section>
  );
};
