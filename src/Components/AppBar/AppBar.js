import React from 'react';
import s from './AppBar.module.scss';
import logo from 'images/logo.png';
import UserMenu from 'Components/UserMenu';

function AppBar() {
  return (
    <div className={s.wrapper}>
      <a className={s.logo} href="/">
        <img className={s.img} src={logo} alt="phonebook logotype" />
      </a>
      <UserMenu />
    </div>
  );
}

export default AppBar;
