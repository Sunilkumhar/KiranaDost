import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/navbar/navbar.css";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function Navbar() {
  const [toggle, settoggle] = useState(false);
  const [icon, seticon] = useState(false);

  const openMenu = () => {
    settoggle(!toggle);
    seticon(!icon);
    return console.log("Clicked");
  };
  return (
    <React.Fragment>
      <div className="navbar_owner">
        <div className="logo">
          <Link to="/owner" style={{ color: "black", textDecoration: "none" }}>
            <p>KiranaDost</p>
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
          <Link
            to="/owner/sales"
            style={{ color: "black", textDecoration: "none" }}
          >
            <p>Sales</p>
          </Link>
        </div>
        <div className="routes">
          <Link
            to="/owner/profile"
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
          <Link to="/logout" style={{ color: "black", textDecoration: "none" }}>
            <p style={{ marginRight: "15px" }}>
              <LogoutIcon />
            </p>
          </Link>
        </div>
      </div>
      {/* Mobile res */}
      <div className="navbar_owner_res">
        <div className="logo">
          <Link to="/owner" style={{ color: "black", textDecoration: "none" }}>
            <p>KiranaDost</p>
          </Link>
        </div>
        <div className="routes">
          <div className="menu_icon">
            {icon ? (
              <MenuOpenIcon onClick={openMenu} style={{ fontSize: "30px" }} />
            ) : (
              <MenuIcon onClick={openMenu} style={{ fontSize: "30px" }} />
            )}
          </div>
        </div>
      </div>
      <div className={toggle ? "mobile-link" : "monile-link-no"}>
        <div className="navigatelinks">
          <Link
            to="/owner/ordermore"
            style={{ color: "black", textDecoration: "none" }}
          >
            <p style={{ marginTop: "0px" }}>Order More</p>
          </Link>
          <Link
            to="/owner/staff"
            style={{ color: "black", textDecoration: "none" }}
          >
            <p>Staff</p>
          </Link>
          <Link
            to="/owner/sales"
            style={{ color: "black", textDecoration: "none" }}
          >
            <p>Sales</p>
          </Link>
        </div>
        <div className="profilelinks">
          <Link
            to="/owner/profile"
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
          <Link to="/logout" style={{ color: "black", textDecoration: "none" }}>
            <p style={{ marginRight: "10px", marginTop: "12px" }}>
              <LogoutIcon />
            </p>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
