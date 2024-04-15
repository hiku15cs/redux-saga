import {put, takeEvery} from 'redux-saga/effects';
import { CALL_ASYNC_PRODUCT_DATA, GET_ASYNC_PRODUCT_DATA, SEARCH_PRODUCT, SET_SEARCH_PRODUCT } from './constant';


function* getProducts() {
    console.log('API call');
    let data=yield fetch('http://localhost:3004/product');
    data= yield data.json();
    console.log(data);
    yield put({
        type:GET_ASYNC_PRODUCT_DATA,
        data:data
    })
}

function* getSearchData(action)  {
    console.log('Search Key : ',action);
    let data=yield fetch(`http://localhost:3004/product?q=${action.data}`);
    data=yield data.json();
    console.log(data);
    yield put({
        type : SET_SEARCH_PRODUCT,
        data: data
    })
}

function* productSaga(){
    yield takeEvery(CALL_ASYNC_PRODUCT_DATA,getProducts);
    yield takeEvery(SEARCH_PRODUCT, getSearchData)
}

export default productSaga;