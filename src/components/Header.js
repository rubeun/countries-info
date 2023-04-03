import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <h1>Where in the world?</h1>
      </div>
      <div className="header-right">
        <DarkModeToggle />
      </div>
    </div>
  );
}
export default Header;