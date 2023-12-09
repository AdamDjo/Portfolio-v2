'use client';
import Link from 'next/link';
import './_navbar.scss';

import { MobileMenu } from './MobileMenu';
export const Navbar = () => {
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const href = event.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    console.log(elem);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
    // Update the className of the clicked LInk
    const links = document.querySelectorAll('.link');
    links.forEach((link) => {
      link.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
  };
  return (
    <div className="nav-menu">
      <div className="nav-items ">
        <div>{/* <img src="logo" alt="logo" /> */}</div>
        <div className="nav-links ">
          <Link href="/" className="link" onClick={handleScroll}>
            <span> </span> Home
          </Link>
          <Link href="#about" className="link" onClick={handleScroll}>
            <span>0.1 </span> About
          </Link>
          <Link href="#experience" className="link" onClick={handleScroll}>
            <span>0.2 </span> Experience
          </Link>
          <Link href="#project" className="link" onClick={handleScroll}>
            <span>0.3 </span> Project
          </Link>
          <Link href="#contact" className="link" onClick={handleScroll}>
            <span>0.4 </span> Contact
          </Link>
          <a href="/assets/CV-Adam-BenMessaoud.pdf" target="_blank">
            <button>Resume</button>
          </a>
        </div>
        <MobileMenu></MobileMenu>
      </div>
    </div>
  );
};
