import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import "../../../css/owner/SingleStaff_owner.css";
import { BASE_URL } from "../../../baseURL";
import axios from "../../../axios";

function Singlestaff_owner({
  staff_name,
  staff_phone,
  staff_salary,
  staff_last_salary_paid,
  staff_upi,
  staff_image,
  staff_joining_date,
  _id,
}) {
  const handleEdit = () => {
    localStorage.setItem("edit_id", _id);
  };
  const handleDelete = async () => {
    console.log("delete Staff");
    await axios
      .delete(`/staff/${localStorage.getItem("id")}/${_id}/delete`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("staff deleted");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="singlestaff">
      <div className="singlestaff_img">
        <img src={`${BASE_URL}/${staff_image}`} alt="" />
      </div>
      <div className="singlestaff_detail">
        <p>
          <strong> Name : </strong>
          {staff_name}
        </p>
        <p>
          <strong>Phone : </strong>
          {staff_phone}
        </p>
        <p>
          <strong>Salary : </strong>
          {staff_salary}
        </p>
        <p>
          <strong>Last salary paid(month) : </strong>
          {staff_last_salary_paid}
        </p>
        <p>
          <strong>UPI : </strong>
          {staff_upi}
        </p>
        <p>
          <strong>Joining Date : </strong>
          {staff_joining_date}
        </p>
        <div className="allstaff_btn">
          <Link
            to="/owner/staff/edit"
            style={{ textDecoration: "none" }}
            className="product-seller"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleEdit}
              style={{ margin: "0px 10px" }}
            >
              Edit
            </Button>
          </Link>
          <Link
            to="#"
            style={{ textDecoration: "none" }}
            className="product-seller"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleEdit}
              style={{ margin: "0px 20px" }}
            >
              Pay Salary
            </Button>
          </Link>
          <Link
            to="#"
            style={{ textDecoration: "none" }}
            className="product-seller"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleDelete}
              style={{ margin: "0px 10px" }}
            >
              Delete Staff
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Singlestaff_owner;
