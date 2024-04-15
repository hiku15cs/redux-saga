import { ADD_TO_CART } from "./constant";

export const addToCart=(data)=>{
    console.log('ADD action called',data);
    return  {
        type:ADD_TO_CART,
        data
    }
}

export const removeFromCart=(data)=>{
    console.log('Remove Action called',data);
    return {
        type: 'REMOVE_FROM_CART',
        data
    }
}
export const emptyCart=(data)=>{
    return{
        type:'EMPTY_CART',
        data
    }
}