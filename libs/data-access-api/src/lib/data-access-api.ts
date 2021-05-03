import axios from 'axios';
import * as process from 'process';
export const getAllCard = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_SERVER}/`)
  if (!response) {
    throw  new Error('Something went wrong');
  }
  return response;
}
