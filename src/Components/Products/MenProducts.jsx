import axios from "axios";
import { useEffect, useState } from "react";
import jwt from "jwt-decode";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";

const baseUrl = "https://khutta-ma-jutta-backend.herokuapp.com";

const MenProducts = ({ mainPage }) => {
  const [products, setProducts] = useState([]);
  const cookies = new Cookies();

  const [isLogin, setLogin] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    async function getAllShoes() {
      const res = await axios.get(`${baseUrl}/api/v1/shoes`);
      console.log(res?.data);
      const menProduct = res?.data?.data?.filter((p) => {
        return p?.category === "male";
      });
      setProducts(menProduct);
    }
    getAllShoes();
  }, []);

  useEffect(() => {
    const token = cookies.get("token");

    let user;
    if (token) user = jwt(token);
    if (user?.id) setLogin(true);
  }, []);
  const addToWishList = async (product) => {
    if (!isLogin) navigator("/auth/login");
    const payload = {
      productId: product?.id,
      quantity: 1,
      name: product?.name,
      price: product?.price,
    };
    await axios
      .post(
        `${baseUrl}/api/v1/cart`,
        { ...payload },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  if (mainPage)
    return (
      <div className="menContainer">
        {products?.map((p) => (
          <div class="product-card-men" key={"p?.id"}>
            <div class="product-image">
              <span class="discount-tag">50% off</span>
              <img src={p?.photo} class="product-thumb" alt="" />
              <button class="card-btn" onClick={() => addToWishList(p)}>
                add to cart
              </button>
              <div className="name">{p.name}</div>
            </div>
            <div class="product-info-men">
              <h2 class="product-brand">
                {p?.name} (<span>{p?.brand}</span>)
              </h2>
              <p class="product-short-info">{p?.description}</p>
              <span class="price">
                {p?.currency} {p?.price}
              </span>
              {/* <span class="actual-price">Rs.4000</span> */}
            </div>
          </div>
        ))}
      </div>
    );
  return (
    <section class="product">
      <h2 class="product-category" id="menTag">
        MEN
      </h2>
      <button class="pre-btn">
        <img
          src="https://i.postimg.cc/34GmGBGW/image.png"
          height="80px"
          alt=""
        />
      </button>
      <button class="nxt-btn">
        <img
          src="https://i.postimg.cc/34GmGBGW/image.png"
          height="80px"
          alt=""
        />
      </button>

      <div class="product-container">
        {products?.map((p) => (
          <div class="product-card" key={"p?.id"}>
            <div class="product-image">
              <span class="discount-tag">50% off</span>

              <img src={p?.photo} class="product-thumb" alt="" />
              <button class="card-btn" onClick={() => addToWishList(p)}>
                add to cart
              </button>
            </div>
            <div class="product-info">
              <h2 class="product-brand">
                {p?.name} (<span>{p?.brand}</span>)
              </h2>
              <p class="product-short-info">{p?.description}</p>
              <span class="price">
                {p?.currency} {p?.price}
              </span>
              {/* <span class="actual-price">Rs.4000</span> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenProducts;
