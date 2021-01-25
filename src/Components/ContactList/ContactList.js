import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from './Contact';
import styles from './ContactList.module.scss';
import { operations, selectors } from 'redux/contacts';

const { getContacts, getFilter, getFilteredContacts } = selectors;

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const displayedContacts = filter.trim() ? filteredContacts : contacts;

  return (
    <ul className={styles.contactList}>
      {displayedContacts.map(contact =>
        Contact({
          id: contact.id,
          name: contact.name,
          phone: contact.number,
          deleteHandler: () => dispatch(operations.deleteContact(contact.id)),
        }),
      )}
    </ul>
  );
}

export default ContactList;
