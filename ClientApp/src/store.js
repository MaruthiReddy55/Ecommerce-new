import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import logger from 'redux-logger'



const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store

//const logger = store => next => action => {
//  console.log('dispatching', action);
//  let result = next(action);
//  console.log('next state', store.getState());
//  return result;
//};

//export default createStore(rootReducer, applyMiddleware(logger, thunk));
