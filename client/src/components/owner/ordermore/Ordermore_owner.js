/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import Ordermore_single_owner from "./Ordermore_single_owner";
import { useNavigate } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import "../../../css/owner/Ordermore_owner.css";
import Navbar from "../../navbar/Navbar";
import axios from "../../../axios";

function Ordermore_owner() {
  const history = useNavigate();
  const [pdts, setpdts] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) history("/");
    axios
      .get(`/buypdts/all`)
      .then((res) => {
        console.log(res.data);
        setpdts(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`/buypdts/all`)
      .then((res) => {
        setpdts(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, [pdts]);

  return (
    <React.Fragment>
      <Navbar />
      <div className="ordermore-owner">
        <div className="ordermore_head">
          <p>All Products available to buy</p>
        </div>

        <div className="ordermore-pdts">
          <Grid container spacing={1}>
            {pdts.length === 0 ? (
              <h1 style={{ marginLeft: "25px" }}>
                Currently there are no products available to buy.
              </h1>
            ) : (
              pdts.map((x) => (
                <Grid item md={6}>
                  <Ordermore_single_owner
                    buy_email={x.buy_email}
                    buy_image={x.buy_image}
                    buy_name={x.buy_name}
                    buy_price={x.buy_price}
                    buy_seller_name={x.buy_seller_name}
                    buy_upi={x.buy_upi}
                    buy_quantity={x.buy_quantity}
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

export default Ordermore_owner;
