import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

import "../../../css/owner/Product_Edit_owner.css";

import axios from "../../../axios";
import Navbar from "../../navbar/Navbar";

function Pdt_owner_edit() {
  const history = useNavigate();

  let initVals = {
    pdt_name: "",
    pdt_remaining_stock: "",
    pdt_current_price: "",
    pdt_image: "",
  };
  const [vals, setVal] = useState(initVals);
  const [pdt_image, setpdt_image] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...vals, [name]: value });
  };
  const handleChangeImage = (e) => {
    setpdt_image(e.target.files[0]);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) history("/");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    const fd = new FormData();
    if (vals.pdt_name !== "") fd.append("pdt_name", vals.pdt_name);
    if (pdt_image !== "") fd.append("pdt_image", pdt_image);

    if (vals.pdt_remaining_stock !== "")
      fd.append("pdt_remaining_stock", vals.pdt_remaining_stock);
    if (vals.pdt_current_price !== "")
      fd.append("pdt_current_price", vals.pdt_current_price);

    console.log(fd);
    await axios
      .put(
        `/product/${localStorage.getItem("id")}/${localStorage.getItem(
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
        console.log(res);
        localStorage.removeItem("edit_id");
        // history("/owner");
      })
      .catch((err) => {
        console.log(err.message);
      });
    if (vals.pdt_remaining_stock !== "") {
      let difference = localStorage.getItem("qty") - vals.pdt_remaining_stock;
      let curr_date = new Date();
      let obj = {
        curr_day: curr_date.getDate(),
        curr_month: curr_date.getMonth(),
        curr_year: curr_date.getFullYear(),
        today_sale: localStorage.getItem("price") * difference,
        today_profit: localStorage.getItem("profit") * difference,
        month_sale: localStorage.getItem("price") * difference,
        month_profit: localStorage.getItem("profit") * difference,
      };
      console.log(obj);
      axios
        .post(`/sales/${localStorage.getItem("id")}/addsales`, obj, {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          // setsalesinfo(res.data);
          console.log(res.data);
          localStorage.removeItem("price");
          localStorage.removeItem("profit");
          localStorage.removeItem("qty");
        })
        .catch((err) => {
          console.log(err.status);
        });
    }
    history("/owner");
  };

  return (
    <React.Fragment>
      <Navbar />

      <div className="updatepdt_owner">
        <div className="updatepdt_owner_head">
          <p>Update Product Details</p>
        </div>
        <Alert severity="info">
          Please fill details which you want to edit
        </Alert>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            margin="normal"
            fullWidth
            id="pdt_name"
            label="Product Name"
            name="pdt_name"
            autoComplete="pdt_name"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            type="number"
            margin="normal"
            fullWidth
            id="pdt_remaining_stock"
            label="Stock Remaining"
            name="pdt_remaining_stock"
            autoComplete="pdt_remaining_stock"
            onChange={handleChange}
          />
          <TextField
            type="number"
            margin="normal"
            fullWidth
            id="pdt_current_price"
            label="Price"
            name="pdt_current_price"
            autoComplete="pdt_current_price"
            onChange={handleChange}
          />
          <div className="up_img" style={{ display: "flex" }}>
            <p>Upload Image :</p>

            <input
              type="file"
              name="pdt_image"
              onChange={handleChangeImage}
              style={{ marginTop: "15px", paddingLeft: "10px" }}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "10px" }}
          >
            Update Product
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Pdt_owner_edit;
