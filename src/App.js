import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Maksim from './components/Maksim/Maksim';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>                       
            <Route path="/profile" element={<Profile profilePage={props.stateApp.profilePage} 
                                                     addPost={props.addPost} 
                                                     apdateNewPostText={props.apdateNewPostText} />} />     
            <Route path="/dialogs/*" element={<Dialogs state={props.stateApp.dialogsPage} />}/>
            {/*добавили /* после dialogs вместо exact, что бы не исчезало меню*/}
            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/maksim" element={<Maksim/>}/>
          </Routes>  
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;