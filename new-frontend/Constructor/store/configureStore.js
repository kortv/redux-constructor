import { INITIAL_STATE } from './../constants/InitialState';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './../reducers';
import thunk from 'redux-thunk';

function configureStore(initialState = INITIAL_STATE) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f));

  return store;
}

const store = configureStore();
export default store;
