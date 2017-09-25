import {combineReducers} from 'redux';
import libraryReducer from './libraryReducer';
import selectedReducer from './selectedReducer';



export default combineReducers ({
	libraries: libraryReducer,
  selectedId: selectedReducer
});

