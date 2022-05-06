import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
// import MyPosts from './components/Profile/MyPosts/MyPosts.jsx';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
      {/* <MyPosts /> */}
    </div> 
  );
}

export default App;