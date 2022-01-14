import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/navbar/navbarseller.css";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function NavbarSeller() {
  const [toggle, settoggle] = useState(false);
  const [icon, seticon] = useState(false);

  const openMenu = () => {
    settoggle(!toggle);
    seticon(!icon);
    return console.log("Clicked");
  };
  return (
    <React.Fragment>
      <div className="navbar_seller">
        <div className="logo">
          <Link
            to="/seller/allpdts"
            style={{ color: "black", textDecoration: "none" }}
          >
            <p>KiranaDost</p>
          </Link>
          <Link
            to="/seller/addnew"
            style={{ color: "black", textDecoration: "none" }}
          >
            <p>Add Product</p>
          </Link>
        </div>
        <div className="routes">
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
          <Link to="/logout" style={{ color: "black", textDecoration: "none" }}>
            <p style={{ marginRight: "15px" }}>
              <LogoutIcon />
            </p>
          </Link>
        </div>
      </div>
      {/* mobile res */}

      <div className="navbar_seller_res">
        <div className="logo">
          <Link
            to="/seller/allpdts"
            style={{ color: "black", textDecoration: "none" }}
          >
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
      <div className={toggle ? "mobile-link1" : "monile-link-no1"}>
        <div className="navigatelinks">
          <Link
            to="/seller/addnew"
            style={{ color: "black", textDecoration: "none" }}
          >
            <p>Add Product</p>
          </Link>
          {/* <Link to="#" style={{ color: "black", textDecoration: "none" }}>
            <p>Sales</p>
          </Link> */}
        </div>
        <div className="profilelinks">
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
          <Link to="/logout" style={{ color: "black", textDecoration: "none" }}>
            <p style={{ marginRight: "10px", marginTop: "15px" }}>
              <LogoutIcon />
            </p>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavbarSeller;
