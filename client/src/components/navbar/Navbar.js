import React from "react";
import { Link } from "react-router-dom";
import "../../css/navbar/navbar.css";
import Avatar from "@mui/material/Avatar";

function Navbar() {
  return (
    <div className="navbar_owner">
      <div className="logo">
        <Link to="/owner" style={{ color: "black", textDecoration: "none" }}>
          <p>KiranaDost</p>
        </Link>
      </div>
      <div className="routes">
        <Link to="/owner" style={{ color: "black", textDecoration: "none" }}>
          <p>Home</p>
        </Link>
        <Link
          to="/owner/ordermore"
          style={{ color: "black", textDecoration: "none" }}
        >
          <p>Order More</p>
        </Link>
        <Link
          to="/owner/staff"
          style={{ color: "black", textDecoration: "none" }}
        >
          <p>Staff</p>
        </Link>
        <Link to="/logout" style={{ color: "black", textDecoration: "none" }}>
          <p>Logout</p>
        </Link>
        <Link
          to="/owner/profile"
          style={{ color: "black", textDecoration: "none" }}
        >
          <Avatar
            alt="P"
            src="/static/images/avatar/1.jpg"
            style={{
              marginTop: "15px",
              marginRight: "15px",
              marginLeft: "15px",
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
