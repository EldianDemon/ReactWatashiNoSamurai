import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs'
import Profile from './components/Profile/Profile';



const App = () =>  {
  return (
    <div className="container App_container">
      <Header />
      <Nav />
      <div className='App__content'>
        <Dialogs />
        {/* <Profile /> */}
      </div>
    </div>
  );
}

export default App;
