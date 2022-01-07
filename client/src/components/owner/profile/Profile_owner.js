import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import "../../../css/owner/Profile_owner.css";
import Alert from "@mui/material/Alert";

import axios from "../../../axios";
import { BASE_URL } from "../../../baseURL";
import Navbar from "../../navbar/Navbar";

function Profile_owner() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    axios
      .get(`/${localStorage.getItem("id")}`)
      .then((res) => {
        console.log(res.data);
        setuser(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, []);
  const deleteaccount = async () => {
    console.log("delete account");
    await axios
      .delete(`/${localStorage.getItem("id")}/delete`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        window.location.href = "http://localhost:3000/logout";
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="owner-profile">
        <div className="profiel_head">
          <p>Profile Details : </p>
        </div>
        <div className="profile_detail">
          <Grid container spacing={2}>
            <Grid item md={6}>
              <div className="profile_img">
                <img src={`${BASE_URL}/${user.owner_image}`} alt="" />
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="detaisl">
                <p>Name : {user.owner_name}</p>
                <p>Email : {user.owner_email}</p>
                <p>Phone : {user.owner_phone}</p>
                <p>Shop Adress : {user.shop_address}</p>
                <p>UPI : {user.owner_upi}</p>
                <div className="edit-links">
                  <Link
                    to="/owner/profile/edit"
                    style={{ textDecoration: "none" }}
                    className="owner-edit"
                  >
                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      className="shop-owner"
                    >
                      Edit Profile
                    </Button>
                  </Link>
                  <Link
                    to="/owner/profile/addstaff"
                    style={{ textDecoration: "none" }}
                    className="addnew-pdt"
                  >
                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      className="shop-owner"
                    >
                      Add Staff
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

export default Profile_owner;
