import { FiGithub } from 'react-icons/fi';

import { SlSocialYoutube } from 'react-icons/sl';
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from 'react-icons/sl';
import './_leftLayout.scss';
export const LeftSide = () => {
  return (
    <div className="left-content">
      <div className="left-links">
        <a href="#" target="_blank">
          <FiGithub></FiGithub>
        </a>
        <a href="#" target="_blank">
          <SlSocialYoutube></SlSocialYoutube>
        </a>
        <a href="#" target="_blank">
          <SlSocialLinkedin></SlSocialLinkedin>
        </a>
        <a href="#" target="_blank">
          <SlSocialFacebook></SlSocialFacebook>
        </a>
        <a href="#" target="_blank">
          <SlSocialInstagram></SlSocialInstagram>
        </a>
      </div>
      <div className="liner"></div>
    </div>
  );
};
