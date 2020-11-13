import { combineReducers } from 'redux';
import { createStore } from 'redux';
import todolistReducer from './todolistReducer.reducer';
import fakebookReducer from './fakeBook.reducer';
import baiTapGameBauCua from './baiTapGameBauCua.reducer';

const rootReducer = combineReducers({
  todolistReducer,
  fakebookReducer,
  baiTapGameBauCua,
});

export const store = createStore(rootReducer);
