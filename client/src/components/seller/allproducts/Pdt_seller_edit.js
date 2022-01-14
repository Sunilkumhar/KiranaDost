import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import "../../../css/seller/Pdt_seller_edit.css";
import NavbarSeller from "../../navbar/NavbarSeller";
import axios from "../../../axios";
import Alert from "@mui/material/Alert";

function Pdt_seller_edit() {
  const history = useNavigate();

  const [buy_name, setbuy_name] = useState("");
  const [buy_price, setbuy_price] = useState("");
  const [buy_quantity, setbuy_quantity] = useState("");
  const [buy_image, setbuy_image] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("token")) history("/");
  }, []);

  const handleChangename = (e) => {
    setbuy_name(e.target.value);
  };
  const handleChangeprice = (e) => {
    setbuy_price(e.target.value);
  };
  const handleChangeqty = (e) => {
    setbuy_quantity(e.target.value);
  };
  const handleChangeImage = (e) => {
    console.log(e.target.files[0]);
    setbuy_image(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    if (buy_name !== "") fd.append("buy_name", buy_name);
    if (buy_quantity !== "") fd.append("buy_quantity", buy_quantity);
    if (buy_price !== "") fd.append("buy_price", buy_price);
    if (buy_image !== "") fd.append("buy_image", buy_image);

    console.log(fd);
    await axios
      .put(
        `/buyer/${localStorage.getItem("id")}/${localStorage.getItem(
          "edit_id"
        )}/update`,
        fd,
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(123);
        localStorage.removeItem("edit_id");
        history("/seller/allpdts");
      });
  };

  return (
    <React.Fragment>
      <NavbarSeller />
      <div className="editpdt">
        <div className="addpdtedit_head">
          <p>Edit Product Details</p>
        </div>
        <Alert severity="info">
          Please fill details which you want to edit
        </Alert>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            margin="normal"
            fullWidth
            id="buy_name"
            label="Product name"
            name="buy_name"
            autoComplete="buy_name"
            autoFocus
            onChange={handleChangename}
          />
          <TextField
            type="number"
            margin="normal"
            fullWidth
            id="buy_price"
            label="Price"
            name="buy_price"
            autoComplete="buy_price"
            onChange={handleChangeprice}
          />
          <TextField
            type="number"
            margin="normal"
            fullWidth
            id="buy_quantity"
            label="Quantity"
            name="buy_quantity"
            autoComplete="buy_quantity"
            onChange={handleChangeqty}
          />
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
            Edit product
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Pdt_seller_edit;
