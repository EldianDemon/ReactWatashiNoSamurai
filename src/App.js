import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs'
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () =>  {
  return (
    <Router>
      <div className="container App_container">
        <Header />
        <Nav />
        <div className='App__content'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
