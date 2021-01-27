import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomeView from 'views/HomeView';
import ContactsView from 'views/ContactsView';
import SignUpView from 'views/SignUpView';
import LogInView from 'views/LogInView';
import Container from 'Components/Container';
import AppBar from 'Components/AppBar';
import Footer from 'Components/Footer';
import { authOperations } from 'redux/auth';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/signup" component={SignUpView} />
        <Route path="/login" component={LogInView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>

      <Footer />
    </Container>
  );
}

export default App;
