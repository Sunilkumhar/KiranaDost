import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import "../../../css/owner/Singlepdt_owner.css";
import { BASE_URL } from "../../../baseURL";
import Grid from "@material-ui/core/Grid";

function Singlepdts({
  _id,
  pdt_name,
  pdt_remaining_stock,
  pdt_current_price,
  pdt_image,
  pdt_bought_price,
}) {
  const handleEdit = () => {
    localStorage.setItem("edit_id", _id);
  };
  return (
    <div className="single_pdt">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="pdt_img">
            <img src={`${BASE_URL}/${pdt_image}`} alt="" />
            {/* <img src={corner} alt="" /> */}
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="pdt_detail">
            <p>
              <strong> Name : </strong>
              {pdt_name}
            </p>
            <p>
              <strong>Price : </strong>
              {pdt_current_price}
            </p>
            <p>
              <strong>Stock Remaining : </strong>
              {pdt_remaining_stock}
            </p>
            <p>
              <strong>Bought Price : </strong>
              {pdt_bought_price}
            </p>
            <p>
              <strong>Current Profit/Qty. : </strong>
              {pdt_current_price - pdt_bought_price}
            </p>
            <Link
              to="/owner/pdt/edit"
              style={{ textDecoration: "none" }}
              className="product-seller"
            >
              <Button variant="contained" color="primary" onClick={handleEdit}>
                Edit Product
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Singlepdts;
