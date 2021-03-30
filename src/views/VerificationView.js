import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Section from 'Components/Section';
import VerificationSuccessScreen from 'Components/VerificationSuccessScreen';
import VerificationFailureScreen from 'Components/VerificationFailureScreen';
import { authOperations, authSelectors } from 'redux/auth';

function VerificationView() {
  const { verificationToken } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.verifyUser(verificationToken));
    //eslint-disable-next-line
  }, []);

  const isVerified = useSelector(authSelectors.getUserVerification);
  console.log(`verification status: ${isVerified}`);

  const error = useSelector(authSelectors.getUserError);
  console.log(error);

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );
  console.log(`current status: ${isFetchingCurrentUser}`);

  return (
    <Section flex={true}>
      {isVerified && <VerificationSuccessScreen />}
      {error?.message === 'Link is not valid' && <VerificationFailureScreen />}
    </Section>
  );
}

export default VerificationView;
