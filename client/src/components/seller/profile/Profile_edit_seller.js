import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useNavigate } from "react-router-dom";

import "../../../css/seller/Register_seller.css";
import NavbarSeller from "../../navbar/NavbarSeller";

import axios from "../../../axios";
import Alert from "@mui/material/Alert";

function Profile_edit_seller() {
  const history = useNavigate();

  let initVals = {
    seller_name: "",
    seller_email: "",
    seller_phone: "",
    seller_password: "",
    shop_address: "",
    seller_upi: "",
  };
  const [vals, setVal] = useState(initVals);
  const [seller_image, setseller_image] = useState("");
  const [errmsg, seterrmsg] = useState("");
  const [show, setshow] = useState("password");
  const [eyeicon, seteyeicon] = useState("VisibilityOffIcon");

  useEffect(() => {
    if (!localStorage.getItem("token")) history("/");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...vals, [name]: value });
  };
  const handleChangeImage = (e) => {
    console.log(e.target.files[0]);
    setseller_image(e.target.files[0]);
  };
  const changeVisibility = () => {
    setshow("password");
    seteyeicon("VisibilityOffIcon");
  };
  const changeVisibilityOff = () => {
    setshow("text");
    seteyeicon("VisibilityIcon");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    if (seller_image !== "") fd.append("seller_image", seller_image);

    if (vals.seller_name !== "") fd.append("seller_name", vals.seller_name);
    if (vals.seller_email !== "") fd.append("seller_email", vals.seller_email);
    if (vals.seller_phone !== "") fd.append("seller_phone", vals.seller_phone);
    if (vals.seller_password !== "")
      fd.append("seller_password", vals.seller_password);
    if (vals.shop_address !== "") fd.append("shop_address", vals.shop_address);
    if (vals.seller_upi !== "") fd.append("seller_upi", vals.seller_upi);
    console.log(fd);
    await axios
      .put(`/buyer/${localStorage.getItem("id")}/update`, fd, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(123);
        history("/seller/profile");
        seterrmsg("");
      })
      .catch((err) => {
        seterrmsg("User already registered");
      });

    setTimeout(() => {
      seterrmsg("");
    }, 2000);
  };

  return (
    <React.Fragment>
      <NavbarSeller />
      <div className="register-seller">
        {errmsg && <Alert severity="error">{errmsg}</Alert>}
        <div className="register_head">
          <p>Update Profile</p>
        </div>
        <Alert severity="info">
          Please fill details which you want to edit
        </Alert>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            margin="normal"
            fullWidth
            id="seller_name"
            label="Name"
            name="seller_name"
            autoComplete="seller_name"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            type="number"
            margin="normal"
            fullWidth
            id="seller_phone"
            label="Phone"
            name="seller_phone"
            autoComplete="seller_phone"
            onChange={handleChange}
          />
          <TextField
            type="text"
            margin="normal"
            fullWidth
            id="seller_email"
            label="Email"
            name="seller_email"
            autoComplete="seller_email"
            onChange={handleChange}
          />
          <TextField
            type="text"
            margin="normal"
            fullWidth
            id="shop_address"
            label="Shop Address"
            name="shop_address"
            autoComplete="shop_address"
            onChange={handleChange}
          />
          <TextField
            type="text"
            margin="normal"
            fullWidth
            id="seller_upi"
            label="UPI"
            name="seller_upi"
            autoComplete="seller_upi"
            onChange={handleChange}
          />
          <div className="passwordfield">
            <TextField
              type={show}
              margin="normal"
              fullWidth
              id="seller_password"
              label="Password"
              name="seller_password"
              autoComplete="seller_password"
              onChange={handleChange}
            />
            <div className="eye">
              {eyeicon === "VisibilityOffIcon" ? (
                <VisibilityOffIcon onClick={changeVisibilityOff} />
              ) : (
                <VisibilityIcon onClick={changeVisibility} />
              )}
            </div>
          </div>
          <div className="up_img" style={{ display: "flex" }}>
            <p>Upload Image :</p>

            <input
              type="file"
              name="seller_image"
              onChange={handleChangeImage}
              style={{ marginTop: "15px", paddingLeft: "10px" }}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ justifyContent: "left", marginTop: "25px" }}
          >
            Update Profile
            <ArrowRightAltIcon
              style={{
                position: "absolute",
                right: "10px",
                fontSize: "30px",
              }}
            />
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Profile_edit_seller;
