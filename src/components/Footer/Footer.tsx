import { FiGithub } from 'react-icons/fi';
import './_footer.scss';
import { SlSocialLinkedin } from 'react-icons/sl';
export const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="#" target="_blank">
          <FiGithub></FiGithub>
        </a>

        <a href="#" target="_blank">
          <SlSocialLinkedin></SlSocialLinkedin>
        </a>
      </div>
    </footer>
  );
};
