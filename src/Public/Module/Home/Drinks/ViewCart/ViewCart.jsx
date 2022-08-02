import { useEffect } from "react";
import { useState } from "react";
import "./ViewCart.scss";

const ViewCart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);


    const handleRemove = (id) => {
        const arr = cart.filter((list) => list.id !== id);
        setCart(arr);
        handlePrice();
    }
    const handlePrice = () => {
        let ans = 0;
        cart.map((list) => (ans += list.amount * list.price));
        setPrice(ans);
    };
    useEffect(() => {
        handlePrice();
    })

    return (
        <>
            <div id="view-cart">
                <div className="container">
                    <div className="foods">
                        <h1 className="title">View Cart</h1>
                        {cart.map((list) => (
                            <div className="cart-box" key={list.id}>
                                <div className="cart-img">
                                    <img src={list.image} alt="" />
                                    <p>{list.price}</p>
                                </div>
                                <div>
                                    <button onClick={() => handleChange(list, 1)}>+</button>
                                    <button>{list.amount}</button>
                                    <button onClick={() => handleChange(list, -1)}>-</button>
                                </div>
                                <div>
                                    <span>{list.price}</span>
                                    <button onClick={() => handleRemove(list.id)}>Remove</button>
                                </div>

                            </div>
                        ))}
                        <div className="total">
                            <span>Total Price of your Cart</span>
                            <span>Rs - {price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewCart;