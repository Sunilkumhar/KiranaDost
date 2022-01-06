import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import "../../../css/seller/Profile_seller.css";
import NavbarSeller from "../../navbar/NavbarSeller";
import Alert from "@mui/material/Alert";

import axios from "../../../axios";
import { BASE_URL } from "../../../baseURL";

function Profile_seller() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    axios
      .get(`/buyer/${localStorage.getItem("id")}`)
      .then((res) => {
        console.log(res.data);
        setuser(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, []);

  const deleteaccount = () => {
    console.log("delete account");
  };

  return (
    <React.Fragment>
      <NavbarSeller />
      <div className="seller-profile">
        <div className="profiel_head">
          <p>Profile Details : </p>
        </div>
        <div className="profile_detail">
          <Grid container spacing={2}>
            <Grid item md={6}>
              <div className="profile_img">
                <img src={`${BASE_URL}/${user.seller_image}`} alt="" />
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="detaisl">
                <p>
                  <strong> Name : </strong>
                  {user.seller_name}
                </p>
                <p>
                  <strong>Email : </strong>
                  {user.seller_email}
                </p>
                <p>
                  <strong>Phone : </strong>
                  {user.seller_phone}
                </p>
                <p>
                  <strong>Shop Adress : </strong>
                  {user.shop_address}
                </p>
                <p>
                  <strong>UPI : </strong>
                  {user.seller_upi}
                </p>
                <div className="edit-links">
                  <Link
                    to="/seller/profile/edit"
                    style={{ textDecoration: "none" }}
                    className="seller-edit"
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className="shop-owner"
                    >
                      Edit Profile
                    </Button>
                  </Link>
                  <Link
                    to="/seller/addnew"
                    style={{ textDecoration: "none" }}
                    className="addnew-pdt"
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className="shop-owner"
                    >
                      Add Product
                    </Button>
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="delete_acc">
          <div className="alert_delete">
            <Alert severity="warning">
              On Deleteling your account the data corresponding to your account
              will be deleted permently and it cannot be restored back.
            </Alert>
          </div>

          <Button
            variant="contained"
            color="error"
            style={{ backgroundColor: "red" }}
            onClick={deleteaccount}
          >
            Delete Account
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile_seller;
