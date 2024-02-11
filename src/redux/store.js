// src/store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // If you're using thunks for async actions
import rootReducer from './reducers'; // Import your root reducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
