import React, { useRef, useState } from 'react';
import './_menu-mobile.scss';
import { MdOutlineClose } from 'react-icons/md';
import Link from 'next/link';
import { Footer } from '../Footer/Footer';

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      {/* small burger icon */}
      <div className="burger-menu" onClick={() => setShowMenu(true)}>
        <div className="burger-wrapper ">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
      </div>
      {showMenu && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <MdOutlineClose
              className="close"
              onClick={() => setShowMenu(false)}
            />
            <div className="nav-links-mobile ">
              <Link
                href="/"
                className="link"
                onClick={() => setShowMenu(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="link"
                onClick={() => setShowMenu(false)}
              >
                About
              </Link>
              <Link
                href="#experience"
                className="link"
                onClick={() => setShowMenu(false)}
              >
                Experience
              </Link>
              <Link
                href="#project"
                className="link"
                onClick={() => setShowMenu(false)}
              >
                Project
              </Link>
              <Link
                href="#contact"
                className="link"
                onClick={() => setShowMenu(false)}
              >
                Contact
              </Link>
              <a href="/assets/CV-Adam-BenMessaoud.pdf" target="_blank">
                <button>Resume</button>
              </a>
            </div>
            <div className="icons">
              <Footer></Footer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
