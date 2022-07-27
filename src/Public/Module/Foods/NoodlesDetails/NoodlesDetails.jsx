import "./NoodlesDetails.scss";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


const NoodlesDetails = () => {
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
        <div id="noodles-details">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="item-food">
                <img
                  src="data:image/jpeg;base64,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"
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

                <h1 className="name-item">Phở Bò</h1>
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
export default NoodlesDetails;