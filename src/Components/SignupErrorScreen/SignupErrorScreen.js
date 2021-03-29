import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';

import s from './SignupErrorScreen.module.scss';
import { toggleModal, nullifyError } from 'redux/auth/auth-actions';

function SignupErrorScreen({ isModalOpen }) {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(toggleModal(false));
    dispatch(nullifyError());
  };

  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
        ariaHideApp={false}
        onRequestClose={handleModalClose}
        className={s.content}
        overlayClassName={s.overlay}
      >
        <h2 className={s.title}>Oops!</h2>
        <p className={s.upperText}>
          Looks like a user with this e-mail already exists!
        </p>
        <p className={s.text}>
          Please{' '}
          <Link to="/login" className={s.link}>
            Log In
          </Link>{' '}
          or{' '}
          <Link to="/signup" className={s.link}>
            Sign Up
          </Link>{' '}
          with a different e-mail.
        </p>
      </ReactModal>
    </>
  );
}

export default SignupErrorScreen;
