import axios from 'axios';

const transformGetData = data =>
  Object.entries(data).map(([id, contact]) => ({ ...contact, id }));

axios.defaults.baseURL = 'https://6214fddbcdb9d09717a92c22.mockapi.io';

export const addContactsApi = async contact => {
  try {
    const res = await axios.post('/contacts', contact);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getContactsApi = () => {
  return axios
    .get('/contacts')
    .then(({ data }) => transformGetData(data))
    .catch(err => err);
};

export const removeContactsApi = async id => {
  try {
    const res = await axios.delete(`/contacts/${id}`);
    return res.data.id;
  } catch (error) {
    console.log(error);
  }
};
