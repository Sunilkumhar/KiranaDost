/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Singlestaff_owner from "./Singlestaff_owner";

import "../../../css/owner/Staff_owner.css";
import { useNavigate } from "react-router-dom";

import axios from "../../../axios";
import Navbar from "../../navbar/Navbar";

function Staff_owner() {
  const history = useNavigate();

  const [staff, setstaff] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) history("/");

    axios
      .get(`/staff/${localStorage.getItem("id")}/allstaff`)
      .then((res) => {
        setstaff(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`/staff/${localStorage.getItem("id")}/allstaff`)
      .then((res) => {
        setstaff(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, [staff]);

  return (
    <React.Fragment>
      <Navbar />

      <div className="allstaff">
        <div className="allstaff_head">
          <p>All Staff Members</p>
        </div>
        <div className="allstaff_details">
          <Grid container spacing={2}>
            {staff?.length === 0 ? (
              <h1>Currently You Have No staff...</h1>
            ) : (
              staff.map((x) => (
                <Grid item md={4}>
                  <Singlestaff_owner
                    staff_name={x.staff_name}
                    staff_phone={x.staff_phone}
                    staff_salary={x.staff_salary}
                    staff_last_salary_paid={x.staff_last_salary_paid}
                    staff_upi={x.staff_upi}
                    staff_image={x.staff_image}
                    staff_joining_date={x.staff_joining_date}
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

export default Staff_owner;
