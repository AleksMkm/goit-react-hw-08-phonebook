import React, { useRef } from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import s from './UserMenu.module.scss';

function UserMenu() {
  const btn = useRef();

  return (
    <div className={s.userMenu}>
      <AccountBoxIcon style={{ fontSize: 42 }} className={s.icon} />
      <span className={s.userName}>User</span>
      <button ref={btn} className={s.btn} type="button">
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
