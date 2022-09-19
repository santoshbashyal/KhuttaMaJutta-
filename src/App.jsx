import "./App.css";
import Collection from "./Components/Collection/Collection";
import Footer from "./Components/Footer/Footer";
import Navs from "./Components/Navs/Navs";
import MenProducts from "./Components/Products/MenProducts";
import Products from "./Components/Products/Products";
import WomenProducts from "./Components/Products/WomenProducts";
import axios from "axios";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import AdminPageHome from "./Components/Admin/Home/Home";
const baseUrl = "https://khutta-ma-jutta-backend.herokuapp.com";

function App() {
  const [isLogginIn, setIsLogginIn] = useState();

  const getMe = () => {
    axios
      .get(`${baseUrl}/api/v1/auth/me`, { withCredentials: true })
      .then((response) => {
        setIsLogginIn(true);
      })
      .catch((error) => {
        setIsLogginIn(false);
        console.log(error.message);
        // Asses denied
      });
  };

  useEffect(() => {
    getMe();
  }, []);

  // Every time when you be in the website check the auth

  const Home = () => {
    return (
      <div>
        <header className="hero-section"></header>
        <Products />
        <Collection />
        <MenProducts />
        <WomenProducts />
        <Footer />
      </div>
    );
  };

  return (
    <div className="App">
      <Navs />

      <Routes>
        <Route
          path="/auth/login"
          exact
          element={<Login isLogin={isLogginIn} />}
        />
        <Route
          path="/auth/signup"
          exact
          element={<Signup isLogin={isLogginIn} />}
        />
        <Route path="/checkout" exact element={<Checkout />} />
        <Route path="/men" element={<MenProducts mainPage />} />
        <Route path="/women" element={<WomenProducts mainPage />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin" element={<AdminPageHome />} /> */}
      </Routes>
    </div>
  );
}

export default App;
