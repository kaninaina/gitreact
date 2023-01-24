import React from 'react'
import "./Home.css";
function Home(props) {
let {data,cardUpdate}=props;

  return (
    <div className='home'>
      <h1>HOME</h1>
      <div className='home-margin'>
    {
      data.map((el)=>{
       return(
        <div className='card-1' key={el.id}>
        <div className='card-1-img'>
          <img src={el.img}></img>
        </div>
        <div className='card-1-con'>
          <h3>{el.name}</h3>
          <h4>{el.price}</h4>
          <div>
            <p>BUY NOW</p>
            <p onClick={()=>{cardUpdate(el)}}>ADD TO CART</p>
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

export default Home
