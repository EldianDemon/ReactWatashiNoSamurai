import React from 'react'
import h from './header.module.css'
import AuthContainer from '../common/auth/authContainer'

const Header = () => {
    return (
        <header className='header block'>
            <img src='' alt='logo' className={h.header__logo}></img>
            <AuthContainer />
        </header>
    );
}

export default Header;