import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';

import s from './SignupVerifyModal.module.scss';
import { toggleModal, nullifyCreationCode } from 'redux/auth/auth-actions';

function SignupVerifyModal({ isModalOpen }) {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(toggleModal(false));
    dispatch(nullifyCreationCode());
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
        <h2 className={s.title}>Success!</h2>
        <p className={s.text}>
          Thank you for signing up! You are just one step before receiving a
          full access to our app. Please verify your e-mail address to continue.
        </p>
      </ReactModal>
    </>
  );
}

export default SignupVerifyModal;
