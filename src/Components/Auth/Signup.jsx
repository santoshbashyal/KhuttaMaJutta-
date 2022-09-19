import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import Navs from "../Navs/Navs";
import { Navigate, useNavigate } from "react-router";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
const baseUrl = "https://khutta-ma-jutta-backend.herokuapp.com";

const SignUp = (props) => {
  console.log(props.isLogin);
  // Send params : { email, password}
  const cookies = new Cookies();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  // Handler
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const contactHandler = (event) => {
    setContact(event.target.value);
  };

  const submitHandler = async (e) => {
    console.log("fsdf");
    e.preventDefault();
    const data = {
      email,
      password,
      name,
      phoneNumber: contact,
    };
    axios
      .post(`${baseUrl}/api/v1/auth/register`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        // cookies.set("token", response?.data?.token);
        response?.data && navigate("/");
        // window.location.reload(false);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.error);
      });
  };

  if (cookies.get("token")) navigate("/");

  // HTML file to show to the user
  return (
    <div>
      <Navs />
      <section className="vh-100" style={{ height: "50vh !important" }}>
        <div className="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid"
                alt="Phone image"
              ></img>
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                  <input
                    name="name"
                    type="text"
                    id="form1Example13"
                    class="form-control form-control-lg"
                    onChange={nameHandler}
                  />
                  <label class="form-label" for="form1Example13">
                    Name
                  </label>
                </div>
                <div class="form-outline mb-4">
                  <input
                    name="email"
                    type="email"
                    id="form1Example13"
                    class="form-control form-control-lg"
                    onChange={emailHandler}
                  />
                  <label class="form-label" for="form1Example13">
                    Email address
                  </label>
                </div>
                <div class="form-outline mb-4">
                  <input
                    name="text"
                    type="contact"
                    id="form1Example23"
                    class="form-control form-control-lg"
                    onChange={contactHandler}
                  />
                  <label class="form-label" for="form1Example23">
                    Contact
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                  <input
                    name="password"
                    type="password"
                    id="form1Example23"
                    class="form-control form-control-lg"
                    onChange={passwordHandler}
                  />
                  <label class="form-label" for="form1Example23">
                    Password
                  </label>
                </div>

                <div class="d-flex justify-content-around align-items-center mb-4">
                  {/* <!-- Checkbox --> */}
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label class="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  onClick={submitHandler}
                  type="submit"
                  class="btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
