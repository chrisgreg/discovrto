import { GET_PICTURES } from '../actions/index';

const INITIAL_STATE = {
  pictures: [],
  currentPicture: null
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PICTURES:
      const photoData = action.payload.data.result;
      const newState = {
        pictures: [ photoData ],
        currentPicture: photoData[0]
      }
      console.log(newState);
      return newState;
  }

  return state;
}
