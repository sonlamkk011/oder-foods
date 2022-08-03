import { useState } from "react";
import { useEffect } from "react";
import Search from "../../Foods/Search/Search";
import "./ViewCart.scss";
import "./Cart.css";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Contexts/Cart";



const ViewCart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += count * item.price));
    setPrice(ans);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddcount =() => {
    setCount(count +1);
  }
  const handleRemoveCount = () => {
if(count == 0 ){

}else{
  setCount(count -1)
}

  }

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
                  <button onClick={handleAddcount}>+</button>
                  ({count})
                  
                  <button onClick={handleRemoveCount}>-</button>
                </div>
                <div>
                  <span>{item.price} VND</span>
                  <button onClick={() => handleRemove(item.id)}>
                    Remove 
                    </button>
                </div>
              </div>
            ))}
            <div className="total">
              <span>Total Price </span>
              <span>{price} VND</span>
              <div className="button" onClick={handleClickOpen}>
                <Button className="oder">Oder</Button>
                <div>

                <Dialog open={open} onClose={handleClose} >
                  <DialogTitle >Thêm ghi chú cho món ăn : </DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Thêm Ghi Chú ..."
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Link to="/oder-details">
                    <Button onClick={handleClose}>Oder</Button>
                    </Link>
                  </DialogActions>
                </Dialog>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
export default ViewCart;
