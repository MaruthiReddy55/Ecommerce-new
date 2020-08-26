import { combineReducers } from "redux";

export const products = (state = [], action) => {
  if(action.type === 'REPLACE_PRODUCTS') {
    return action.products;
  }

  return state;
};

export const cart = (state = [], action) => {
  if(action.type === 'ADD_TO_CART'){
    return state.concat(action.product);
  } else if(action.type === 'REMOVE_FROM_CART'){
    return state.filter(product => product.id !== action.product.id);
  }

  return state;
};

const rootReducer = combineReducers({ products, cart })

export default rootReducer