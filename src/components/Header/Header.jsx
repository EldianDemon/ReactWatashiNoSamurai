import React from "react"
import h from './Header.module.css'

const Header = () => {
    return (
        <header className={h.header}>
            <img src='' alt='logo' className={h.header__logo}></img>
        </header>
    );
}

export default Header;