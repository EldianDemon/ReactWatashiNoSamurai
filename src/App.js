import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import MessegesContainer from './components/Messeges/MessegesContainer';
import MessegesinContainer from './components/Messeges/Messegesin/MessegesinContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className='App'>
      <Router >
        <Header />
        <Nav />
        <div className='content'>
          <Routes>
            <Route path='/profile' element={<Profile store = {props.store} />} />
            <Route path='/messeges' element={<MessegesContainer />} />
              {/* <Route path={`/messeges/${props.state.messegesPage.MessegesData.id}`} element={<MessegesinContainer store = {props.store} />} /> */}
            <Route path='/friends*' element={<FriendsContainer />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
