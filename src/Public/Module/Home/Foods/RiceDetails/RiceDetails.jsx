import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./RiceDetails.scss";
import Navbar from "../../../Shared/Navbar/Navbar";
import Header from "../../../Shared/Header/Header";
import axios from "axios";
import publicService from "../../../Service/PublicService";
import { useEffect } from "react";

const RiceDetails = () => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [lists, setLists] = useState([]);

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

  useEffect(() => {
    fetch("https://order-foods.herokuapp.com/api/v1/foods/list")
      .then((res) => res.json())
      .then((lists) => {
        setLists(lists.Pageable.content);
      });
  }, []);

  return (
    <>
      <div id="rice-details">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="item-food">
                {lists.map(list => (
                  <div>
                    {list.name}
                    </div>

                ))}
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
  );
};
export default RiceDetails;
