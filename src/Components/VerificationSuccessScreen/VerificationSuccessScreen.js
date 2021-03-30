import { Link } from 'react-router-dom';
import s from './VerificationSuccessScreen.module.scss';

function VerificationSuccessScreen() {
  return (
    <>
      <div className={s.wrapper}>
        <h1 className={s.title}>Success</h1>
        <p className={s.text}>
          Thank you! E-mail verification completed. Please log in to continue.
        </p>
        <Link to="/login" className={s.link}>
          Log In
        </Link>
      </div>
    </>
  );
}

export default VerificationSuccessScreen;
