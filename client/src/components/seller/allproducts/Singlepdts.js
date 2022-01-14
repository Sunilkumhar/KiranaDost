import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";
import "../../../css/seller/Singlepdts.css";
import { BASE_URL } from "../../../baseURL";

function Singlepdts({ _id, buy_name, buy_price, buy_image, buy_quantity }) {
  const handleEdit = () => {
    localStorage.setItem("edit_id", _id);
  };
  return (
    <div className="singlepdt_seller">
      <Grid container spacing={2}>
        <Grid item md={6}>
          <div className="pdt_img">
            <img src={`${BASE_URL}/${buy_image}`} alt="" />
          </div>
        </Grid>
        <Grid item md={6}>
          <div className="allpdts_detaisl">
            <p>
              <strong> Name : </strong>
              {buy_name}
            </p>
            <p>
              <strong>Price : </strong>
              {buy_price}
            </p>
            <p>
              <strong>Quantity : </strong>
              {buy_quantity}
            </p>
            <Link
              to="/seller/pdt/edit"
              style={{ textDecoration: "none" }}
              className="product-seller"
            >
              <Button variant="contained" color="primary" onClick={handleEdit}>
                Edit
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Singlepdts;
