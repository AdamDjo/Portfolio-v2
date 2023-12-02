import Link from 'next/link';
import './_navbar.scss';
import './_burger.scss';
export const Navbar = () => {
  return (
    <div className="nav-menu">
      <div className="nav-items ">
        <div>
          <img src="logo" alt="logo" />
        </div>
        <div className="nav-links ">
          <Link href="/" className="link">
            Home
          </Link>
          <Link href="/about" className="link">
            About
          </Link>
          <Link href="/experience" className="link">
            Experience
          </Link>
          <Link href="/project" className="link">
            Project
          </Link>
          <Link href="/contact" className="link">
            Contact
          </Link>
          <a href="/assets/CV-Adam-BenMessaoud.pdf" target="_blank">
            <button>Resume</button>
          </a>
        </div>
        {/* small burger icon */}
        <div className="burger-menu">
          <div className="burger-wrapper ">
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
