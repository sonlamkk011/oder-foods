import "./BreadDetails.scss";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


const BreadDetails = () => {
    const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleReduce = () => {
    if (count == 0) {
    } else {
      setCount(count - 1);
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return(
        <>
        <div id="bread-details">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="item-food">
                <img
                  src="https://d1sag4ddilekf6.azureedge.net/cuisine/16/icons/upload-photo-icon_3408dc71ae96497c82a6f5fb35763840_1549033935837593141.jpeg"
                  loading="lazy"
                  style={{
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    marginTop:10,
                    display: "block",
                    width: 300,
                    height: 160,
                  }}
                />

                <h1 className="name-item">Bánh Mì</h1>
                <div>
                <Button
                  className="icon"
                  variant="outlined"
                  onClick={handleClickOpen}
                >
                  Oder
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Note</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Vui lòng ghi thêm chi tiết cho món ăn nếu cần. Vd: Không
                      rau, không ớt....
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Ghi chú:..."
                      type="email"
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <a href="/cart">
                      <Button onClick={handleClose}>Oder</Button>
                    </a>
                  </DialogActions>
                </Dialog>

                <div className="icon-count">
                  <Button onClick={handleIncrease}>
                    <img src="https://food.grab.com/static/images/icons/icon-plus-bordered.svg" />
                  </Button>
                  {count}
                  <Button onClick={handleReduce}>
                    <img src="https://food.grab.com/static/images/icons/icon-minus-bordered.svg" />
                  </Button>
                </div>
              </div>
              </div>
              
            </div>
            
            
          </div>
        </div>

        </div>
        
        </>
    )
}
export default BreadDetails;