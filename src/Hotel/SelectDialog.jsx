import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import BasicDatePicker from "./BasicDatePicker";
import { useNavigate } from "react-router-dom";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const [fee, setFee] = React.useState(0);
  const [days, setDays] = React.useState(0);

  const navigate = useNavigate();

  React.useEffect(() => {
    setFee(days * 229.5);
  }, [days]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirm = () => {
    setOpen(false);
    // alert("Order Succeed")
    navigate(`/invoice`);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((res) => {
        console.log(res); //这里会返回经纬度，然后还要通过经纬度转换地区名称
      });
    }
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Button
        variant="contained"
        onClick={() => {
          getLocation();
          handleClickOpen();
        }}
      >
        Select
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth={"xs"}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <div className=" mt-4">
            <BasicDatePicker fullWidth />
          </div>
          <div className=" mt-6">
            <TextField
              value={days}
              onChange={(e) => setDays(e.target.value)}
              type={"number"}
              label="Days"
              fullWidth
            />
          </div>

          <div className="mt-6 text-left">
            <span className=" font-bold text-xl mr-3">Total Fee:</span>
            <span className=" text-xl">{fee} $</span>
          </div>

          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
