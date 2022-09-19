import "./SideBar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import React from "react";

const SideBar = ({ logoutButtonHandler, setContent }) => {
  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li onClick={() => setContent("Product")}>
            <PersonOutlineIcon className="icon" />
            <span>Product</span>
          </li>
          <li onClick={() => setContent("User")}>
            <NotificationsNoneIcon className="icon" />
            <span>User</span>
          </li>
          <li onClick={() => setContent("Response")}>
            <PsychologyOutlinedIcon className="icon" />
            <span>Response</span>
          </li>
          <li onClick={logoutButtonHandler}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
