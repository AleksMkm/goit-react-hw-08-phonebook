import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'Components/Container';
import ContactList from 'Components/ContactList';
import ContactForm from 'Components/ContactForm';
import Section from 'Components/Section';
import Filter from 'Components/Filter';
import { operations, selectors } from 'redux/contacts';
import Loader from 'Components/Loader';
import Footer from 'Components/Footer';

function App() {
  const contacts = useSelector(selectors.getContacts);
  const error = useSelector(selectors.getErrorData);
  const isLoading = useSelector(selectors.getLoadingData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Section title="Phonebook" flex={false}>
        <ContactForm />
      </Section>
      <Section title="Contacts" flex={true}>
        {isLoading ? (
          <Loader />
        ) : contacts.length ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : error ? (
          <div>Oops. {error}.</div>
        ) : (
          <div>Oops. no contacts here! Let's add some data!</div>
        )}
      </Section>
      <Footer />
    </Container>
  );
}

export default App;
