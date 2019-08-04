import reducer from '../reducers/index';
import { createStore } from 'redux';

const initialState = {
  tech: 'Redux'
};

const store = createStore(reducer, initialState);

export { store };
