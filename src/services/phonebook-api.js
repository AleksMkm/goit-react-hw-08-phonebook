import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030/api';
// axios.defaults.baseURL = 'https://phonebook-restapi.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function createUser(name, email, password) {
  const user = {
    name,
    email,
    password,
  };
  // console.log(user);
  const response = await axios.post('/auth/signup', user);
  console.log(response);
  // token.set(response.data.token);
  return response.data;
}

export async function verifyUser(verificationToken) {
  const response = await axios.get(`/auth/verify/${verificationToken}`);
  console.log(response);
  // token.set(response.data.token);
  return response.data;
}

export async function loginUser(email, password) {
  const user = {
    email,
    password,
  };
  console.log(user);
  const response = await axios.post('/auth/login', user);
  console.log(response);
  token.set(response.data.token);
  return response.data;
}

export async function logoutUser() {
  const response = await axios.post('/auth/logout');
  // console.log(response);
  token.unset();
  return response.data;
}

export async function fetchCurrentUser() {
  const response = await axios.get('/users/current');
  // console.log(response);
  return response.data;
}

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  // console.log(response);
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
