import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Body/Profile/Profile'
import MessegesContainer from './components/Body/Messeges/MessegesContainer'
import FriendsContainer from './components/Body/Friends/FriendsContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router >
        <Header />
        <Nav />
        <div className='content'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/messeges' element={<MessegesContainer />} />
            <Route path='/friends*' element={<FriendsContainer />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
