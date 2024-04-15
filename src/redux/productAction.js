import { CALL_ASYNC_PRODUCT_DATA, SEARCH_PRODUCT } from "./constant";

export const loadProductList = () => {
  console.log("Product Action is called");
  return {
    type: CALL_ASYNC_PRODUCT_DATA,
    data: "No Data"
  };
};


export const searchProduct = (searchKey) => {
  console.log('SEARCH_PRODUCT ACTION is called');
  return {
    type : SEARCH_PRODUCT,
    data : searchKey
  }
}