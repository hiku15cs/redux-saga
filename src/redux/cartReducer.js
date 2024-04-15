import { ADD_TO_CART } from "./constant";

export const cartdata = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      data = [action.data, ...data];
      console.log("Action:", action.data);
      console.log("Data", data);
      return data;
    case "REMOVE_FROM_CART":
      data=data.filter((val,index)=> index!==action.data);
      return data;
    case "EMPTY_CART":
      data = [];
      return data;
    default:
      break; 
  }
  return data;
};
