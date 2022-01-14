import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "../../../css/owner/Ordermore_single_owner.css";
import axios from "../../../axios";
import { BASE_URL } from "../../../baseURL";

function Ordermore_single_owner({
  buy_email,
  buy_image,
  buy_name,
  buy_price,
  buy_seller_name,
  buy_upi,
  buy_quantity,
  _id,
}) {
  const history = useNavigate();
  const [qty, setqty] = useState(0);
  const [price, setprice] = useState(0);
  const handleChange = (e) => {
    setqty(e.target.value);
  };
  const handleChangePrice = (e) => {
    setprice(e.target.value);
  };

  const handleEdit = async () => {
    if (qty === 0 || price === 0) return alert("Please enter qunatity");
    if (qty > buy_quantity) return alert("Quantity unavailable");
    console.log(buy_image);
    const fd_owner = new FormData();
    fd_owner.append("pdt_name", buy_name);
    fd_owner.append("pdt_remaining_stock", qty);
    fd_owner.append("pdt_bought_price", buy_price);
    fd_owner.append("pdt_current_price", price);
    fd_owner.append("pdt_image", buy_image);

    //update owner
    await axios
      .post(`/product/${localStorage.getItem("id")}/addpdt`, fd_owner, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("Owner Updated");
      });

    let seller_id;
    //get seller email
    await axios.post("/buyer/one", { seller_email: buy_email }).then((res) => {
      console.log(res.data);
      seller_id = res.data;
    });

    // update seller
    const fd_seller = new FormData();
    fd_seller.append("buy_quantity", buy_quantity - qty);

    console.log(fd_seller);
    await axios
      .put(`/buyer/${seller_id}/${_id}/update`, fd_seller)
      .then((res) => {
        console.log("seller updated");
      });

    //get owner email
    let owner_email;
    await axios.get(`/${localStorage.getItem("id")}`).then((res) => {
      console.log(res.data);
      owner_email = res.data.owner_email;
    });

    //send email
    const fd_email = new FormData();
    fd_email.append("email1", owner_email);
    fd_email.append("email2", buy_email);
    fd_email.append("pdt_price", buy_price);
    fd_email.append("pdt_qunatity", qty);
    fd_email.append("pdt_name", buy_name);
    fd_email.append("pdt_image", buy_image);

    await axios.post(`/sendmail`, fd_email).then((res) => {
      console.log("emailsent");
      history("/owner");
    });
  };
  return (
    <div className="ordermore_single_pdts">
      <Grid container spacing={2}>
        <Grid item md={6}>
          <div className="ordermore_img">
            <img src={`${BASE_URL}/${buy_image}`} alt="" />
            {/* <img src={corner} alt="" /> */}
          </div>
        </Grid>
        <Grid item md={6}>
          <div className="ordermore-details">
            <p>
              <strong>Name : </strong>
              {buy_name}
            </p>
            <p>
              <strong>Seller Email : </strong>
              {buy_email}
            </p>
            <p>
              <strong>Seller Name : </strong>
              {buy_seller_name}
            </p>
            <p>
              <strong>Price : </strong>Rs. {buy_price}
            </p>
            <p>
              <strong>Quantity : </strong>
              {buy_quantity}
            </p>

            <p>
              <strong>UPI : </strong>
              {buy_upi}
            </p>
          </div>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4} style={{ marginLeft: "15px" }}>
            <TextField
              type="number"
              margin="normal"
              required
              id="qty"
              label="Quantity"
              name="qty"
              autoComplete="name"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              type="number"
              margin="normal"
              required
              id="price"
              label="Price"
              name="price"
              autoComplete="price"
              onChange={handleChangePrice}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleEdit}
              style={{ marginTop: "20px" }}
            >
              Order
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Ordermore_single_owner;
