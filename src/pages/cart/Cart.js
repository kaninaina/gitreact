import React from 'react'
import "./Cart.css";
function Cart(props) {
  let {item,removCart,increment}=props;
  return (
 <div className='cart'>
  <h1>CART</h1>
  <div className='cart-flex'>
    {
      item.map((el)=>{
return(
  <div className='cart-1' key={el.id}>
  <div className='cart-1-img'>
    <img src={el.img}></img>
  </div>
  <div className='cart-1-con'>
    <p>{el.name}</p>
    <p>{el.price}</p>
    <div>
      <p>-</p>
      <p>{el.count}</p>
      <p onClick={()=>{el.count=el.count+1}}>+</p>
    </div>
    <div>
      <p onClick={()=>{removCart(el)}}>REMOVE ITEM</p>
    </div>
  </div>
</div>
)
      })
    }
 
  </div>

 </div>
  )
}

export default Cart