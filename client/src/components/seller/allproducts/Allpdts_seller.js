import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Singlepdts from "./Singlepdts";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";

import "../../../css/seller/Allpdts_seller.css";
import NavbarSeller from "../../navbar/NavbarSeller";
import axios from "../../../axios";

function Allpdts_seller() {
  const history = useNavigate();

  const [pdts, setpdts] = useState([]);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      localStorage.setItem("id", user._id);
      localStorage.setItem("name", user.name);
    } catch {}
    if (!localStorage.getItem("token")) history("/");
  }, []);

  useEffect(() => {
    axios
      .get(`/buyer/${localStorage.getItem("id")}/all`)
      .then((res) => {
        // console.log(res.data);
        setpdts(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`/buyer/${localStorage.getItem("id")}/all`)
      .then((res) => {
        setpdts(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, [pdts]);

  return (
    <React.Fragment>
      <NavbarSeller />

      <div className="allpdts-seller">
        <div className="allpdts_head">
          <p>All Products added by you</p>
        </div>
        <div className="allpdts_detail">
          <Grid container spacing={2}>
            {pdts?.length === 0 ? (
              <h1>Currently You Have No pdts...</h1>
            ) : (
              pdts.map((x) => (
                <Grid item md={6}>
                  <Singlepdts
                    buy_name={x.buy_name}
                    buy_price={x.buy_price}
                    buy_quantity={x.buy_quantity}
                    buy_image={x.buy_image}
                    _id={x._id}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Allpdts_seller;
