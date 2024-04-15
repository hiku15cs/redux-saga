import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../redux/productAction';

const Header = () => {

  let timer;
  const passSearchKey=(key,d)=>{
    if (timer) clearTimeout(timer);
      timer=setTimeout(()=>{
        dispatch(searchProduct(key));
      },d)
     
  }

    const cart=useSelector((state)=>state.cartdata);
    const dispatch=useDispatch();
    return (
    <div className='header'>
      <Link to={'/'}><h1 className='e-comm-logo'>E-Comm</h1></Link>
      <input className='search-box' onChange={(e)=>passSearchKey(e.target.value,1000)} type='text' placeholder='Search Products'/>
      <Link to={'/cart'}>
      <div>
        <span>{cart.length}</span>
        <img src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png' alt='cart'/>
      </div>
      </Link>
    </div>
  )
}

export default Header;