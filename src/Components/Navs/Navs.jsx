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
            <div onClick={() => logout()} className="logout">
              <li>Logout</li>
            </div>
          ) : (
            <>
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
              <Link to="/auth/signup" className="register">
                <span>Register</span>
              </Link>
            </>
          )}
          {cookies.get("token") && (
            <Link to="/checkout">
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
          )}
        </div>
      </div>
      <ul className="links-container ">
        <li className="link-item ">
          <Link id="homeId" className="link " to="/">
            home
          </Link>{" "}
        </li>
        <li className="link-item ">
          <Link id="womenId" className="link " to="/women">
            women
          </Link>
        </li>
        <li className="link-item ">
          <Link id="menId" className="link " to="/men">
            men
          </Link>
        </li>
        <li className="link-item ">
          <Link id="kidsId" className="link " to="/kids">
            kids
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navs;
