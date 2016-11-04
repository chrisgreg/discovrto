import { combineReducers } from 'redux';
import PictureReducer from './PictureReducer';

const rootReducer = combineReducers({
  pictures: PictureReducer
});

export default rootReducer;
