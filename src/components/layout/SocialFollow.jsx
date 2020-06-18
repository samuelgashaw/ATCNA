import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InstagramLogo from '../../images/instagram.png';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href="https://www.youtube.com/" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/" className="instagram social">
        {/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
        <img src={InstagramLogo} alt="" width="46px" height="46px" />
      </a>
      <a href="https://www.telegram.com/" className="telegram social">
        <FontAwesomeIcon icon={faTelegram} size="2x" />
      </a>
    </div>
  );
}
