import axios from 'axios';

export const getAllCard = async () => {
  const response = await axios.get(`/api`)
  const data = await response.data
  if (response.status !== 200) {
    throw  new Error('Something went wrong');
  }
  return data;
}


