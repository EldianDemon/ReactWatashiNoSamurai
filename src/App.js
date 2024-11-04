import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import ProfileContainer from './components/content/profile/profileContainer'
import MessegesContainer from './components/content/messeges/messegesContainer'
import FriendsContainer from './components/content/friends/friendsContainer'
import UsersContainer from './components/content/users/usersContainer'
import LoginContainer from './components/login/loginContainer'
import FollowedContainer from './components/content/users/followed/followedContainer'
import { connect } from 'react-redux'
import { initializeThunkCreator } from './reducers/appReducer'
import { authThunkCreator } from './reducers/authReducer'

class App extends React.Component {
  componentDidMount() {
    this.props.authThunkCreator()
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='nav'>
          <Nav />
          <Routes>
            <Route path='/users' element={<FollowedContainer />} />
          </Routes>
        </div>
        <div className='content'>
          <Routes>
            <Route path='/login' element={<LoginContainer />} />
            <Route path='/profile/:userId?' element={<ProfileContainer />} />
            <Route path='/messeges' element={<MessegesContainer />} />
            <Route path='/friends*' element={<FriendsContainer />} />
            <Route path='/users' element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialize: state.app.initialize
  }
}

export default connect(mapStateToProps, { authThunkCreator, initializeThunkCreator })(App)

