'use client';
import Link from 'next/link';
import './_navbar.scss';
import { motion } from 'framer-motion';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // Update the className of the clicked LInk
    const links = document.querySelectorAll('.link');
    links.forEach((link) => {
      link.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="nav-menu"
    >
      <div className="nav-items ">
        <div>{/* <img src="logo" alt="logo" /> */}</div>
        <div className="nav-links ">
          <Link href="#home" className="link" onClick={handleScroll}>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <span> </span> Home
            </motion.div>
          </Link>
          <Link
            href="#about"
            className="link"
            onClick={handleScroll}
            scroll={true}
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              <span>0.1 </span> About
            </motion.div>
          </Link>
          <Link
            href="#experience"
            style={{ scrollBehavior: 'smooth' }}
            className="link"
            onClick={handleScroll}
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              <span>0.2 </span> Experience
            </motion.div>
          </Link>
          <Link href="#project" className="link" onClick={handleScroll}>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.3 }}
            >
              <span>0.3 </span> Project
            </motion.div>{' '}
          </Link>
          <Link href="#contact" className="link" onClick={handleScroll}>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.4 }}
            >
              <span>0.4 </span> Contact
            </motion.div>{' '}
          </Link>
          <a href="/assets/CV-Adam-BenMessaoud.pdf" target="_blank">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.5 }}
            >
              <button>Resume</button>
            </motion.div>
          </a>
        </div>
        <MobileMenu></MobileMenu>
      </div>
    </motion.div>
  );
};
