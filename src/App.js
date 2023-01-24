import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './pages/home/Home';
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Header from './components/header/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Data from "./Data";
function App() {
let {product}=Data;

const[produ,setProducts]=useState(product)
const[cart,setCart]=useState([]);

function addToCart(element){
  let fin=cart.find((el)=>{
    return el.id==element.id;
  });
  if(fin!=null){
    fin.count=fin.count+1;
  }
  else{
  setCart([...cart,element]);}
}

// function cartIncrement(element){
//   let fine=cart.find((el)=>{
//     return el.id===element.id
//   });
//   fine.count=fine.count+1;
//   setCart(cart)
// }


function removeCart(el){
 let filter=cart.filter((ele)=>{
  return ele.id!=el.id
 });
 console.log(filter);
 setCart(filter)
}
  return (
    <BrowserRouter>
     <Header cartLength={cart} ></Header>
    <Routes>
      <Route path='/' element={<Home data={produ} cardUpdate={addToCart}/>}></Route>
      <Route path='/product' element={<Product />}></Route>
      <Route path='/cart' element={<Cart  removCart={removeCart} item={cart}/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
