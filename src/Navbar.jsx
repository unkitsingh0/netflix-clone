import React, { useEffect, useState } from "react";
import "./nav.css";
function Navbar() {
  let [show, handelShow] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handelShow(true);
      } else handelShow(false);
    });
    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        alt="Netflix 2015 logo.svg"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
      />
      <img
        className="nav_avtar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Profile"
      />
    </div>
  );
}

export default Navbar;
