import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import SideBar from "../SideBar/SideBar";
import Tables from "../Table/Table";
import jwt from "jwt-decode";
import Cookies from "universal-cookie";

import "./Home.css";
import { ADMINLOGIN } from "../../Constants/RoutesConstants.js";
import Spinner from "../../Loaders/Spinner";

const AdminPageHome = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const logoutButtonHandler = () => {
    localStorage.removeItem("token");
    navigate(ADMINLOGIN);
    window.location.reload();
  };
  const [content, setContent] = useState("Product");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = jwt(token);
      console.log(user);
      if (!cookies.get("token")) navigate(ADMINLOGIN);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) return <Spinner />;

  // Check if user in cookies or localstorage if not then navigate login page
  return (
    <div className="adminhome">
      <SideBar
        logoutButtonHandler={logoutButtonHandler}
        setContent={setContent}
      />
      <div className="homeContainer">
        <Tables content={content} />
      </div>
    </div>
  );
};

export default AdminPageHome;
