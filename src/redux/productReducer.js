import {
  CALL_ASYNC_PRODUCT_DATA,
  GET_ASYNC_PRODUCT_DATA,
  SEARCH_PRODUCT,
  SET_SEARCH_PRODUCT,
} from "./constant";

export const productReducer = (data = [], action) => {
  switch (action.type) {
    case CALL_ASYNC_PRODUCT_DATA:
      console.log("Product Reducer is called", action.data);
      return [action.data];

    case GET_ASYNC_PRODUCT_DATA:
      console.log("Product Reducer is called", action.data);
      return [...action.data];

    case SEARCH_PRODUCT:
      console.log('SEARCH_PRODUCT REDUCER',action.data);
      return [action.data];

    case SET_SEARCH_PRODUCT:
      console.log('GET SEARCH_PRODUCT REDUCER',action.data);
      return [...action.data];

    default:
      break;
  }
  return data;
};
