import axios from 'axios';

export const GET_PICTURES = 'GET_PICTURES';
export const NEXT_PICTURE = 'NEXT_PICTURE';


export function getPictures() {

  const ROOT_URL = '/api';
  const request = axios.get(ROOT_URL);

  return {
    type: GET_PICTURES,
    payload: request
  }
}

export function nextPicture() {
  return {
    type: NEXT_PICTURE
  }
}
