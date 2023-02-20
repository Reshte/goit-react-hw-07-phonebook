import axios from 'axios';

axios.defaults.baseURL = 'hhttps://63f27fad4f17278c9a2806d7.mockapi.io/api';

const fetchContackts = () => async dispatch => {
  try {
    const response = await axios.get('/contacts');
  } catch (e) {}
};
