import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import "../../../css/seller/Addnew_seller.css";
import NavbarSeller from "../../navbar/NavbarSeller";
import axios from "../../../axios";

function Addnew_seller() {
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
    fd.append("buy_image", buy_image);
    fd.append("buy_price", buy_price);
    fd.append("buy_quantity", buy_quantity);
    fd.append("buy_name", buy_name);

    console.log(fd);
    await axios
      .post(`/buyer/${localStorage.getItem("id")}/addpdt`, fd, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        history("/seller/allpdts");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <NavbarSeller />
      <div className="addpdt">
        <div className="addpdt_head">
          <p>Add new product details</p>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            margin="normal"
            required
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
            required
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
            required
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
            Add product
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Addnew_seller;
