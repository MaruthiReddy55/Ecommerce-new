import axios from 'axios';

export const loadProducts = () => {
  return dispatch => {
    axios.get('http://localhost:3001/products')
      .then(response => {
        dispatch({
          type: 'REPLACE_PRODUCTS',
          products: response.data
        })
      });
  };
}

export const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    product
  };
};

export const removeFromCart = product => {
  return {
    type: 'REMOVE_FROM_CART',
    product
  };
}

