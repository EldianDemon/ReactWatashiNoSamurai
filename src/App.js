import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import ProfileContainer from './components/content/profile/profileContainer'
import MessegesContainer from './components/content/messeges/messegesContainer'
import FriendsContainer from './components/content/friends/friendsContainer'
import UsersContainer from './components/content/users/usersContainer'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <div className='content'>
        <Routes>
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          <Route path='/messeges' element={<MessegesContainer />} />
          <Route path='/friends*' element={<FriendsContainer />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
