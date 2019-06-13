// NPM MODULES
import React from 'react';

// STYLES
import './TextBlock.css';

const TextBlock = (props) => {

  return (
    <div className="main_text__block">
      <h1 className="main_text__title"><span className="main_text__title--span"></span> {props.title}</h1>
      <p className="main_text__paragraph">{props.paragraph}</p>
    </div>
  )
};

export default TextBlock;