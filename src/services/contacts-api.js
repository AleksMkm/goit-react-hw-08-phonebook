import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';
// axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addContact(name, number) {
  const contact = {
    name,
    number,
  };

  const response = await axios.post('/contacts', contact);
  return response.data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
  return id;
}
