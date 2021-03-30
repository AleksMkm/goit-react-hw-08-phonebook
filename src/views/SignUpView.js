import Section from 'Components/Section';
import SignUpForm from 'Components/SignUpForm';
import SignupErrorScreen from 'Components/SignupErrorScreen';
import { useDispatch, useSelector } from 'react-redux';

import { authSelectors } from 'redux/auth';
import { toggleModal } from 'redux/auth/auth-actions';

function SignUpView() {
  const error = useSelector(authSelectors.getUserError);
  // console.log(error?.code);
  const dispatch = useDispatch();

  const isModalOpen = useSelector(authSelectors.getUserModal);
  // console.log(isModalOpen);

  if (error?.code === 409) {
    dispatch(toggleModal(true));
  }

  return (
    <Section flex={true}>
      <SignUpForm />
      <SignupErrorScreen isModalOpen={isModalOpen} />
    </Section>
  );
}

export default SignUpView;
