import React from "react";
import n from './Nav.module.css';

const Nav = () => {
    return(
        <nav className={n.nav}>
          <ul className={n.nav__list}>
              <li className={n.nav__item}>
                <a href="/profile" className={n.nav__link}>Profile</a>
              </li>
              <li className={n.nav__item}>
                <a href="/dialogs" className={n.nav__link}>Messages</a>
              </li>
              <li className={n.nav__item}>
                <a href="/news" className={n.nav__link}>News</a>
              </li>
              <li className={n.nav__item}>
                <a href="/music" className={n.nav__link}>Music</a>
              </li>
              <li className={n.nav__item}>
                <a href="/settings" className={n.nav__link}>Settings</a>
              </li>
          </ul>
      </nav>
    );
}

export default Nav;