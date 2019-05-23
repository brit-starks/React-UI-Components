import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import Thumbnail from './ImageThumbnail';


const HeaderContainer = () => {
    return (
      <div className="headerContainer">
        <Thumbnail />
        <HeaderContent />
      </div>
    );
  };

export default HeaderContainer;