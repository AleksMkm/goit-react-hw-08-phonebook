import React from 'react';
import Container from 'Components/Container';
import HomeView from 'views/HomeView';
import AppBar from 'Components/AppBar';
import { Route, Switch } from 'react-router-dom';
import ContactsView from 'views/ContactsView';
import Footer from 'Components/Footer';

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        {/* <Route path="/register" component={RegisterView} /> */}
        {/* <Route path="/login" component={LoginView} /> */}
        <Route path="/contacts" component={ContactsView} />
      </Switch>

      <Footer />
    </Container>
  );
}

export default App;
