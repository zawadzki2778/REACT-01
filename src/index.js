import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'Hi! How are you?', likeCount: 5},
  {id: 2, message: 'Hi! How are you?', likeCount: 17},
];
let dialogs = [
  { id: 1, name: 'Максим' },
  { id: 2, name: 'Вита' },
  { id: 3, name: 'Женя' },
  { id: 4, name: 'Саша' },
  { id: 5, name: 'Жулик' },
  { id: 6, name: 'Реакт' }
];
let messages = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'How is your react learning?' },
  { id: 3, message: 'Yo, its supper!' },
  { id: 4, message: 'Realy greate' },
  { id: 5, message: 'Ho ho ho' },
  { id: 6, message: 'My way of the Samurai' }
];
// export{dialogs, messages};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
