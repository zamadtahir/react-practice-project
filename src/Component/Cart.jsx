import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const margin ={
  margin:"7% auto",
}

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

 

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (<>
        <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
           
            <button>{item.amount}</button>
           
          </div>
          <div>
            <span>{item.price}</span>
            
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
    </>
  );
};

export default Cart;

// import React from "react";
// import {Link} from "react-router-dom";
// import "../index.css";

// export default function Cart () {

//     return(
//         <>
//          <header>
//         <div>
//         <Link to="/"  className="logo"><i className="fas fa-utensils"></i>Stiller's</Link>
//         <img className="logo-img" src="images/images-removebg-preview1.png" alt="" />
//       </div>
//         </header>
//       <section className="shoping-cart">
// <h1>cart items</h1>
//       </section>
          
//         </>
//     );
// }