import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Messeges from './components/Messeges/Messeges'
import Messegesin from './components/Messeges/Messegesin/Messegesin'
import Friends from './components/Friends/Friends'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className='App'>
      <Router >
        <Header />
        <Nav friendsPage = {props.state.friendsPage} />
        <div className='content'>
          <Routes>
            <Route path='/profile' element={<Profile profilePage = {props.state.profilePage} friendsPage = {props.state.friendsPage} AddPost = {props.AddPost} />} />
            <Route path='/messeges' element={<Messeges messegesPage = {props.state.messegesPage} friendsPage = {props.state.friendsPage} />} />
              <Route path={`/messeges/${props.state.messegesPage.MessegesData.id}`} element={<Messegesin MessegesinData = {props.state.messegesPage.MessegesinData} />} />
            <Route path='/friends*' element={<Friends friendsPage = {props.state.friendsPage} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
