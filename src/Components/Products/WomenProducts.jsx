import "./WomenProducts.css";
import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = "https://khutta-ma-jutta-backend.herokuapp.com";

const WomenProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getAllShoes() {
      const res = await axios.get(`${baseUrl}/api/v1/shoes`);
      const womenProduct = res?.data?.data?.filter((p) => {
        return p?.category === "female";
      });
      setProducts(womenProduct);
    }
    getAllShoes();
  }, []);
  return (
    <section class="product">
      <h2 class="product-category" id="menTag">
        WOMEN
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
          <div class="product-card" key={p?.id}>
            <div class="product-image">
              <span class="discount-tag">50% off</span>

              <img src={p?.photo} class="product-thumb" alt="" />
              <button class="card-btn">add to whislist</button>
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

export default WomenProducts;
