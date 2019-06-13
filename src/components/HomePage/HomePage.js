// NPM MODULES
import React from 'react';
// COMPONENTS
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import MainText from '../MainText/MainText';
import Thumbnails from '../Thumbnails/Thumbnails';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <MainText />
      <Thumbnails />
    </div>
  )
}

export default HomePage;