import React from "react";
import Style from "../Styles/navbar.module.css";
import MenuBarForMobile from "./MenuBarForMObile.jsx";

const Navbar = () => {
  return (
    <div className={Style.navbar}>
      <div className={Style.menuIcon}>
        {/* <i className="fa-solid fa-bars"></i> */}
        <MenuBarForMobile />
      </div>
      <div className={Style.navbarLogo}>
        <img
          src="https://www.shutterstock.com/image-vector/indian-guru-yoga-grandfather-asana-260nw-1802493592.jpg"
          alt="web-logo"
        />&nbsp;
        <span>Guruji</span>
      </div>
      <div className={Style.menu}>
        <p>Home</p>
        <p>Call with Astrologer</p>
        <p>Live(Comming Soon)</p>
      </div>
      <div className={Style.user}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/009/398/577/original/man-avatar-clipart-illustration-free-png.png"
          alt="user-profile-pic"
        />
      </div>
    </div>
  );
};

export default Navbar;