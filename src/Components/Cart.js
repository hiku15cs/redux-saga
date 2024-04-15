import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/cartAction';
import './Cart.css';

const Cart = () => {

    const cartData=useSelector((state)=>state.cartdata);
    console.log(cartData);
    const dispatch=useDispatch(); 
    
    const amount= cartData.reduce((sum,item)=>sum+item.price,0);

  return (
    <div>
      <h1>Cart Items</h1>
      <div className='cart-container'>
      <div className="cart-items">
        {cartData &&
          cartData.map((val, index) => {
            return (
              <div className="cart-item" key={index}>
                <img src={val.photo} alt={val.name} />
                <span><p>Name : {val.name}</p>
                <p>Color : {val.color}</p>
                <p>Price : ₨{val.price}</p></span>
                <p>
                  <button onClick={() => dispatch(removeFromCart(index))}>
                    Remove from Cart
                  </button>
                </p>
              </div>
            );
          })}
      </div>
      <div className=''>
            <div className='cart-amount'>
            <p>Amount : Rs.{amount}.00</p>
            <p>Discount(15%) : Rs.{amount*15/100}.00</p>
            <p>Tax : Rs.{amount*6/100}.00</p>
            <p>Total : Rs.{amount-(amount*15/100)}.00</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
