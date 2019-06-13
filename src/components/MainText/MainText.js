// NPM MODULES
import React, { useContext } from 'react';
// CONTEXT 
import ContentContext from '../../context/content-context';
// STYLES
import './MainText.css'
// COMPONENTS
import TextBlock from '../TextBlock/TextBlock'

const MainText = () => {
  const { content } = useContext(ContentContext)

  return (
    <div className="content-container">
      <div className="main_text">
        {content.textBlocks.map((textBlock) => {
          return <TextBlock key={textBlock.id} title={textBlock.title} paragraph={textBlock.text} />
        })}
      </div>
    </div>
  )
};

export default MainText;