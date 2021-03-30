import { useDispatch, useSelector } from 'react-redux';

import Section from 'Components/Section';
import SignUpForm from 'Components/SignUpForm';
import SignupErrorScreen from 'Components/SignupErrorScreen';
import SignupVerifyModal from 'Components/SignupVerifyModal';

import { authSelectors } from 'redux/auth';
import { toggleModal, setModalType } from 'redux/auth/auth-actions';

function SignUpView() {
  const error = useSelector(authSelectors.getUserError);
  // console.log(error?.code);
  const dispatch = useDispatch();

  const isModalOpen = useSelector(authSelectors.getUserModal);
  // console.log(isModalOpen);
  const modalType = useSelector(authSelectors.getModalType);
  const isUserCreated = useSelector(authSelectors.getUserCreatedCode);

  if (error?.code === 409) {
    dispatch(toggleModal(true));
    dispatch(setModalType('conflict'));
  }

  if (isUserCreated === 201) {
    dispatch(toggleModal(true));
    dispatch(setModalType('created'));
  }

  return (
    <Section flex={true}>
      <SignUpForm />
      {modalType === 'conflict' && (
        <SignupErrorScreen isModalOpen={isModalOpen} />
      )}
      {modalType === 'created' && (
        <SignupVerifyModal isModalOpen={isModalOpen} />
      )}
    </Section>
  );
}

export default SignUpView;
