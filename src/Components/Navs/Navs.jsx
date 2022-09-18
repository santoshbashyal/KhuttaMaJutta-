import axios from "axios";
import process from "process";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

import "./Navs.css";

const baseUrl = "https://khutta-ma-jutta-backend.herokuapp.com";

const Navs = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const logout = async () => {
    await axios.get(`${baseUrl}/api/v1/auth/logout`);
    console.log("dsfsfd");
    cookies.remove("token");
    navigate("/");
    window.location.reload(false);
  };

  return (
    <nav className="navbar-nav">
      <div className="nav">
        <Link to="/">
          <img
            src={"https://i.postimg.cc/f3T8Y6Wy/main.png"}
            alt="calligraphy-fonts "
            border="0 "
          />
        </Link>
        <div className="nav-items ">
          <div className="search ">
            <input
              type="text "
              className="search-box "
              placeholder="search brand, product "
            />
            <button className="search-btn "> search</button>
          </div>
          {cookies.get("token") ? (
            <div onClick={() => logout()}>
              <li>Logout</li>
            </div>
          ) : (
            <Link to="/auth/login">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "https://i.postimg.cc/xJNyRQwf/user.png"
                }
                alt="user"
                height="37cm "
                width="37 "
              />
            </Link>
          )}
          <Link to="# ">
            <img
              src={
                process.env.PUBLIC_URL +
                "https://i.postimg.cc/jCG3Bgc3/cart.png"
              }
              alt="cart"
              height="37cm "
              width="40 "
            />
          </Link>
        </div>
      </div>
      <ul className="links-container ">
        <li className="link-item ">
          <a id="homeId" className="link ">
            home
          </a>{" "}
        </li>
        <li className="link-item ">
          <a id="womenId" className="link ">
            women
          </a>
        </li>
        <li className="link-item ">
          <a id="menId" className="link ">
            men
          </a>
        </li>
        <li className="link-item ">
          <a id="kidsId" className="link ">
            kids
          </a>
        </li>
        <li className="link-item ">
          <a id="accessoriesId" className="link ">
            accessories
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navs;
