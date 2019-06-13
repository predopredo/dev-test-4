// NPM MODULES
import React, { useContext } from 'react';
// CONTEXT 
import ContentContext from '../../context/content-context';
// STYLES
import './Thumbnails.css';

const Thumbnails = () => {
  const { content } = useContext(ContentContext)

  return (
    <div className="content-container">
      <div className="thumbnails">
        {content.thumbnails.map((thumbnail) => {
          return <img key={thumbnail.id} className="thumbnails__img" alt={thumbnail.alt} src={thumbnail.src} />
        })}
      </div>
    </div>
  );
};

export default Thumbnails;