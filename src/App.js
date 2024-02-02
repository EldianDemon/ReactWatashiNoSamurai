import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Messeges from './components/Messeges/Messeges'
import MessegesinContainer from './components/Messeges/Messegesin/MessegesinContainer';
import Friends from './components/Friends/Friends'
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
            <Route path='/messeges' element={<Messeges messegesPage = {props.state.messegesPage} friendsPage = {props.state.friendsPage} />} />
              <Route path={`/messeges/${props.state.messegesPage.MessegesData.id}`} element={<MessegesinContainer store = {props.store} />} />
            <Route path='/friends*' element={<Friends friendsPage = {props.state.friendsPage} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
