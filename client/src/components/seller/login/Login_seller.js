import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "../../../css/seller/Login_seller.css";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import axios from "../../../axios";

function Login_seller() {
  const history = useNavigate();

  let initVals = { seller_email: "", seller_password: "" };
  const [vals, setVal] = useState(initVals);
  const [err, seterr] = useState("");
  const [show, setshow] = useState("password");
  const [eyeicon, seteyeicon] = useState("VisibilityOffIcon");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...vals, [name]: value });
  };
  const changeVisibility = () => {
    setshow("password");
    seteyeicon("VisibilityOffIcon");
  };
  const changeVisibilityOff = () => {
    setshow("text");
    seteyeicon("VisibilityIcon");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(vals);
    await axios
      .post("/buyer/", vals)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data);
        seterr("");
        console.log(err);
        history("/seller/allpdts");
      })
      .catch((err) => {
        seterr("Invalid Email-Id or Password");
        setTimeout(() => {
          seterr("");
        }, 2000);
        console.log(err.status);
        console.log(err);
      });
  };
  const removeErr = () => {
    console.log(123);

    seterr("");
  };

  return (
    <div className="login-seller">
      {err && <Alert severity="error">{err}</Alert>}
      <div className="login_head">
        <p>Log-In</p>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          margin="normal"
          required
          fullWidth
          id="seller_email"
          label="Email"
          name="seller_email"
          autoComplete="name"
          autoFocus
          onChange={handleChange}
        />
        <div className="passwordfield">
          <TextField
            type={show}
            margin="normal"
            required
            fullWidth
            id="seller_password"
            label="Password"
            name="seller_password"
            autoComplete="seller_password"
            onChange={handleChange}
          />
          <div className="eye">
            {eyeicon === "VisibilityOffIcon" ? (
              <VisibilityOffIcon onClick={changeVisibilityOff} />
            ) : (
              <VisibilityIcon onClick={changeVisibility} />
            )}
          </div>
        </div>
        <Button
          variant="contained"
          size="large"
          type="submit"
          fullWidth
          style={{ marginTop: "10px" }}
        >
          Log In
        </Button>
      </form>
    </div>
  );
}

export default Login_seller;
