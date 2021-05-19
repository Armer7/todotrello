import axios from 'axios';

export const getAllCard = async () => {
  const response = await axios.get(`/api`);
  const data = await response.data;
  if (response.status !== 200) {
    throw new Error('Something went wrong');
  }
  return data;
};
export const getCategory = async () => {
  const response = await axios.get(`/api/category`);
  const data = await response.data;
  if (response.status !== 200) {
    throw new Error('Something went wrong');
  }
  return data;
};

export const getUser = async () => {
  const response = await axios.get(`/api/users`);
  const data = await response.data;
  if (response.status !== 200) {
    throw new Error('Something went wrong');
  }
  return data;
};
export const getLabels = async () => {
  const response = await axios.get(`/api/labels`);
  const data = await response.data;
  if (response.status !== 200) {
    throw new Error('Something went wrong');
  }
  return data;
};
