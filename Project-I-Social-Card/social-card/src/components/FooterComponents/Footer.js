import React from 'react';
import './Footer.css';

const Footer = props => {
  return (
    <div className="footer">
      <img class="footerImg" src="https://img.icons8.com/windows/32/000000/speech-bubble.png" alt="message"/>
      <img class="footerImg" src="https://img.icons8.com/android/24/000000/synchronize.png" alt="refresh"/>
      <img class="footerImg" src="https://img.icons8.com/ios-glyphs/30/000000/hearts.png" alt="like"/>
      <img class="footerImg" src="https://img.icons8.com/windows/32/000000/secured-letter.png" alt="email"/>
    </div>
    );
  }

export default Footer;