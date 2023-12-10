import { FiGithub } from 'react-icons/fi';
import { CiMail } from 'react-icons/ci';
import { SlSocialYoutube } from 'react-icons/sl';
import { SlSocialLinkedin } from 'react-icons/sl';
import './_leftLayout.scss';
export const LeftSide = () => {
  return (
    <div className="left-content">
      <div className="left-links">
        <a href="https://github.com/AdamDjo" target="_blank">
          <FiGithub></FiGithub>
        </a>
        <a
          href="https://www.linkedin.com/in/adam-ben-messaoud/"
          target="_blank"
        >
          <SlSocialLinkedin></SlSocialLinkedin>
        </a>
        <a href="mailto:=adam.ben.messaoud@outlook.fr" target="_blank">
          <CiMail></CiMail>
        </a>
      </div>
      <div className="liner"></div>
    </div>
  );
};
