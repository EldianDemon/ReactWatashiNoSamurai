import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Messeges from './components/Messeges/Messeges'
import MessegesinContainer from './components/Messeges/Messegesin/MessegesinContainer';
import Friends from './components/Friends/Friends'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoreContext from './StoreContext';

const App = () => {

  return (
    <StoreContext.Consumer>
      {

        (store) => {
          return (
            <div className='App'>
              <Router >
                <Header />
                <Nav />
                <div className='content'>
                  <Routes>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/messeges' element={<Messeges />} />
                    <Route path={`/messeges/${store.getState().messegesPage.MessegesData.id}`} element={<MessegesinContainer />} />
                    <Route path='/friends*' element={<Friends />} />
                  </Routes>
                </div>
              </Router>
            </div>
          );
        }

      }
    </StoreContext.Consumer>
  );

}

export default App;
