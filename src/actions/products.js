import axios from 'axios'
export const GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const ADD_PRODUCT_PENDING = 'ADD_PRODUCT_PENDING'
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'


export const getProducts = () => {
  return async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_PENDING})
    let products = await axios.get('http://localhost:8000/cameras')

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: products
    })
  }
}
