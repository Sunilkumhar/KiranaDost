import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/owner/Sales.css";
import Navbar from "../../navbar/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "../../../axios";

function Sales() {
  const history = useNavigate();
  const [curr_date, setcurr_date] = useState(new Date());
  const [salesinfo, setsalesinfo] = useState({});

  useEffect(() => {
    if (!localStorage.getItem("token")) history("/");
    console.log(curr_date.getDate());
    let obj = {
      curr_day: curr_date.getDate(),
      curr_month: curr_date.getMonth(),
      curr_year: curr_date.getFullYear(),
    };
    console.log(obj);
    axios
      .post(`/sales/${localStorage.getItem("id")}/getonesales`, obj, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setsalesinfo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) history("/");
    console.log(curr_date.getDate());
    let obj = {
      curr_day: curr_date.getDate(),
      curr_month: curr_date.getMonth(),
      curr_year: curr_date.getFullYear(),
    };
    console.log(obj);
    axios
      .post(`/sales/${localStorage.getItem("id")}/getonesales`, obj, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setsalesinfo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, [curr_date]);

  return (
    <div>
      <React.Fragment>
        <Navbar />
        <div className="sales">
          <p className="sales-owner-head">Sales</p>
          <div className="sale_details">
            <div className="pick_date">
              <p>Select date for which you want to see sales : </p>
              {/* date picker */}
              <div className="date_picker">
                <DatePicker
                  selected={curr_date}
                  onChange={(date) => setcurr_date(date)}
                />
              </div>
            </div>
            <div className="detail">
              <p>
                <strong> Today's sale : </strong> Rs {salesinfo.today_sale}
              </p>
              <p>
                <strong>Today's Profit :</strong> Rs {salesinfo.today_profit}
              </p>
              <p>
                <strong>This Month's sale :</strong> Rs {salesinfo.month_sale}
              </p>
              <p>
                <strong>This Month's Profit :</strong> Rs{" "}
                {salesinfo.month_profit}
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default Sales;
