import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProductList } from "../redux/productAction";
import { addToCart } from "../redux/cartAction";

const ProductList = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(loadProductList());
  }, []);
  return (
    <div>
      <div className="productList">
        {product &&
          product.map((val, index) => {
            return (
              <div className="card-view" key={index}>
                <img src={val.photo} alt={val.name} />
                <p>Name : {val.name}</p>
                <p>Color : {val.color}</p>
                <p>Price : ₨{val.price}</p>
                <p>
                  <button onClick={() => dispatch(addToCart(val))}>
                    Add to Cart
                  </button>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
