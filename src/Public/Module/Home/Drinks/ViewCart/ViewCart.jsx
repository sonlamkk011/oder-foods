import { useState } from "react";
import { useEffect } from "react";
import Search from "../../Foods/Search/Search";
import "./ViewCart.scss";
import './Cart.css';
import { Button } from "@mui/material";

const ViewCart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  console.log("asssssssssss", cart);
  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <div id="view-cart">
        <div className="container">
          <div className="foods">
            <h1 className="title"> View Cart</h1>
          </div>
         
          <article>
            {cart.map((item) => (
              <div className="cart_box" key={item.id}>
                <div className="cart_img">
                  <img src={item.image} alt="" />
                  <p className="name">{item.name}</p>
                </div>
                <div>
                  <button onClick={() => handleChange(item, 1)}>+</button>
                  ({item.amount})
                  <button onClick={() => handleChange(item, -1)}>-</button>
                </div>
                <div>
                  <span>{item.price} VND</span>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            <div className="total">
              <span>Total Price </span>
              <span>Rs - {price}</span>
              <div className="button">
            <Button>Oder</Button>
          </div>
            </div>
            
          </article>
          
        </div>
      </div>
    </>
  );
};
export default ViewCart;
