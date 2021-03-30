import { Link } from 'react-router-dom';

import s from './VerificationFailureScreen.module.scss';

function VerificationFailureScreen() {
  return (
    <>
      <div className={s.wrapper}>
        <h1 className={s.title}>Something went wrong</h1>
        <p className={s.text}>
          It seems that current link is not valid. Please make sure you are
          using the latest link we've sent you.
        </p>
        <Link to="/signup" className={s.link}>
          Sign Up
        </Link>
        <Link to="/login" className={s.link}>
          Log In
        </Link>
      </div>
    </>
  );
}

export default VerificationFailureScreen;
