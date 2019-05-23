import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import Thumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
    return (
      <div className="headerContainer">
        <HeaderTitle />
        <Thumbnail />
        <HeaderContent />
      </div>
    );
  };

export default HeaderContainer;