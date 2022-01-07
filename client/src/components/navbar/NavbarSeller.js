import React from "react";
import { Link } from "react-router-dom";
import "../../css/navbar/navbarseller.css";
import Avatar from "@mui/material/Avatar";

function NavbarSeller() {
  return (
    <div className="navbar_seller">
      <div className="logo">
        <Link
          to="/seller/allpdts"
          style={{ color: "black", textDecoration: "none" }}
        >
          <p>KiranaDost</p>
        </Link>
      </div>
      <div className="routes">
        <Link
          to="/seller/allpdts"
          style={{ color: "black", textDecoration: "none" }}
        >
          <p>Home</p>
        </Link>

        <Link
          to="/seller/addnew"
          style={{ color: "black", textDecoration: "none" }}
        >
          <p>Add Product</p>
        </Link>
        <Link to="/logout" style={{ color: "black", textDecoration: "none" }}>
          <p>Logout</p>
        </Link>
        <Link
          to="/seller/profile"
          style={{ color: "black", textDecoration: "none" }}
        >
          <Avatar
            alt={localStorage.getItem("name")}
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

export default NavbarSeller;
