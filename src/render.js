import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost } from './components/redux/state';
import { apdateNewPostText } from './components/redux/state'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <App stateApp={state} 
           addPost={addPost}
           apdateNewPostText={apdateNewPostText}/> {/* stateApp - это и есть объект props, который мы далее прокидывае через компоненты */}
    </React.StrictMode>
  );
};


