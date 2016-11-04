import { GET_PICTURES } from '../actions/index';

const INITIAL_STATE = {
  pictures: [],
  currentPicture: null
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PICTURES:
      console.log(action);
      return {
        pictures: [ action.data ],
        currentPicture: action.data[0]
      }
  }

  return state;
}
