// POLYFILLS
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
// NPM MODULES
import Axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// STYLES
import 'normalize.css';
import './index.css';
// COMPONENTS
import AppRouter from './routers/AppRouter';
// CONTEXT
import ContentContext from '../src/context/content-context';

const fetchData = async () => {
  const result = await Axios.get('http://localhost:3001/content')
  return result.data
};

const render = () => {
  fetchData().then((data) => {
    const App = () => {
      const [content] = useState({ content: data })

      return (
        <ContentContext.Provider value={content}>
          <AppRouter />
        </ContentContext.Provider>
      )
    };
    return ReactDOM.render(<App />, document.getElementById('root'));
  }).catch((error) => {
    const LoadingFailed = (
      <div className="content-container">
        <h1>Service Unavailable</h1>
        <p>Make sure to run "yarn json-start" to get json-server running</p>
      </div>
    )
    return ReactDOM.render(LoadingFailed, document.getElementById('root'));
  })
};

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();