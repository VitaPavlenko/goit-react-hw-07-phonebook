import axios from 'axios';

const transformGetData = data =>
  Object.entries(data).map(([id, todo]) => ({ ...todo, id }));

axios.defaults.baseURL = 'https://6214fddbcdb9d09717a92c22.mockapi.io';

export const addContactsApi = contact => {
  return axios
    .post('/contacts', contact)
    .then(({ data }) => ({ ...contact, id: data.name }))
    .catch(err => err);
};

export const getContactsApi = () => {
  return axios
    .get('/contacts')
    .then(({ data }) => transformGetData(data))
    .catch(err => err);
};

export const removeContactsApi = id => {
  return axios
    .delete(`/contacts/${id}`)
    .then(() => id)
    .catch(err => err);
};
