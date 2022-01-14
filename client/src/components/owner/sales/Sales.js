import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/owner/Sales.css";
import Navbar from "../../navbar/Navbar";
// import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import TextField from "@mui/material/TextField";

// import DatePicker from "@mui/lab/DatePicker";

function Sales() {
  const history = useNavigate();
  // const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };
  useEffect(() => {
    if (!localStorage.getItem("token")) history("/");
  }, []);
  return (
    <div>
      <React.Fragment>
        <Navbar />
        <div className="sales">
          <p className="sales-owner-head">Sales</p>
          <div className="sale_details">
            <div className="pick_date">
              <p>Select date for which you want to see sales : </p>
              {/* <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            /> */}
            </div>
            <div className="detail">
              <p>
                <strong> Today's sale : </strong> Rs 500
              </p>
              <p>
                <strong>Today's Profit :</strong> Rs 500
              </p>
              <p>
                <strong>This Month's sale :</strong> Rs 500
              </p>
              <p>
                <strong>This Month's Profit :</strong> Rs 500
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default Sales;
