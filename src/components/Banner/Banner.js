// NPM MODULES
import React, { useContext } from 'react';
// STYLES
import './Banner.css';
import ContentContext from '../../context/content-context';

const Banner = () => {
  const { content } = useContext(ContentContext)

  return (
    <div className="content-container">
      <div className="banner">
        <div className="banner__inner">
          <img className="banner__text" alt="howdy good looking blaz" src={content.banner.innerImage} />
        </div>
      </div>
    </div>
  )
}

export default Banner;