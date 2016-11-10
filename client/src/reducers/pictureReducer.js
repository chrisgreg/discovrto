import { GET_PICTURES, NEXT_PICTURE } from '../actions/index';

const INITIAL_STATE = {
  pictures: [],
  currentPicture: {
    originalUrl: '',
    owner: {
      ownerName: ''
    }
  },
  photoIndex: 0
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PICTURES:
      const photoData = action.payload.data.result;
      state = {
        pictures: photoData,
        currentPicture: photoData[0],
        photoIndex: 0
      }
      return state;

    case NEXT_PICTURE:
      const nextPicture = state.photoIndex + 1;
      state = {
        pictures: state.pictures,
        currentPicture: state.pictures[nextPicture],
        photoIndex: nextPicture
      };
      return state;
  }

  return state;
}
