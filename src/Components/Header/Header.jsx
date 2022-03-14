import React from "react";

//material icons
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";

//logo
import tinderLogo from "../../Assets/logo/tinder-logo.png";

//headercss
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <IconButton>
          <PersonIcon fontSize="large" className="header-icon" />
        </IconButton>
      </div>
      <div>
        <img src={tinderLogo} alt="tinder-logo" className="header-logo" />
      </div>
      <div>
        <IconButton>
          <ForumIcon fontSize="large" className="header-icon" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
