import React, { useContext, useState } from "react";

import "./header.styles.css";

import Logo from "../logo/logo.component";

import { Link } from "react-router-dom";

import { useFirebase } from "../../context/firebaseContext";
import { useRestApi } from "../../context/restApiContext";

const Header = () => {
  const [navData, setNavData] = useState([
    { path: "/", text: "Home", className: "nav-menu" },
    { path: "/userhome", text: "Our Menu", className: "nav-menu" },
    { path: "/contact", text: "Contact", className: "nav-menu" },
    { path: "/login", text: "Login", className: "nav-menu" },
  ]);
  //const {auth} = useFirebase()
  const { user, setUser } = useRestApi();
  console.log(user);
  return (
    <div className="header">
      <Logo logoType="png" imageUrl="logo_transparent.png" />
      <div className="menu">
        {user ? (
          <div>
            {user.firstName}
            <Link to="/" className="menuList">
              SignOut
            </Link>
          </div>
        ) : (
          <Link to="/login" className="menuList">
            SignIn
          </Link>
        )}

        {user?.isAdmin ? (
          <div>
            <Link to="/footballanatomy" className="menuList">
              {" "}
              Admin{" "}
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Header;
