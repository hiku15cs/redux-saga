import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { addToCart, emptyCart, removeFromCart } from "./redux/cartAction";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
