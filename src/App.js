import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import ProfileContainer from './components/Body/Profile/ProfileContainer';
import MessegesContainer from './components/Body/Messeges/MessegesContainer';
import FriendsContainer from './components/Body/Friends/FriendsContainer';
import UsersContainer from './components/Body/Users/UsersContainer';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <div className='content'>
        <Routes>
          <Route path='/profile' element={<ProfileContainer />} />
          <Route path='/messeges' element={<MessegesContainer />} />
          <Route path='/friends*' element={<FriendsContainer />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
