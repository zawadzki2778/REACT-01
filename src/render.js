import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost } from './components/redux/state'; 

export let rerenderEntireTree = (state) => {
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App stateApp={state} addPost={addPost}/> {/* stateApp - это и есть объект props, который мы далее прокидывае через компоненты */}
    </React.StrictMode>
  );
};

// 1. в render.js - запихиваем функцию rerenderEntireTree-которая при вызове отрендерит компоненты
// 2. в index.js - импортируем state  и вызываем rerenderEntireTree(state) для начальной отрисовки  (без изменения state)
// 3. в state.js - в функцию addPost - которая меняет state - запихиваем вызов   rerenderEntireTree() чтобы при каждом изменении  state - перерисовывался <App/>???
// т.е. в  index.js вызов rerenderEntireTree(state) происходит только при запуске -один раз?

