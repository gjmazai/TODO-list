import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './storage/storage';


const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
        updateMainPageData={store.updateMainPageData} />
    </React.StrictMode>,
    document.getElementById('root')
  );

  reportWebVitals();
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);