import { useState } from "react";
import { useEffect } from "react";
import Search from "../../Foods/Search/Search";
import "./ViewCart.scss";
import "./Cart.css";
import { Button, ButtonBase, ButtonGroup } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../../Contexts/Cart";
import { ButtonDropdown, ButtonToolbar } from "reactstrap";



const ViewCart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };




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


  const handleAddcount = () => {
    setCount(count + 1);
  }
  const handleRemoveCount = () => {
    if (count == 0) {

    } else {
      setCount(count - 1)
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
                <div style={{ marginRight: 20, display: "flex" }} className="button-count">
                  <button style={{ width: 100, borderRadius: 5, border: 10, marginRight: 10 }} onClick={handleAddcount}>+</button>
                  ({count})

                  <button style={{ width: 100, borderRadius: 5, border: 10, marginLeft: 10 }} onClick={handleRemoveCount}>-</button>
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
              <div className="button">
                <Button onClick={handleClickOpenDialog} className="oder">Oder</Button>
                <div>
                  <Dialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Thêm ghi chú của bạn"}
                    </DialogTitle>
                    <DialogContent>
                      <TextField id="standard-basic" label="Note" variant="standard" />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseDialog}>Cancel</Button>
                      <Button onClick={handleCloseDialog} autoFocus>
                        Ok
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>


                <div>

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
