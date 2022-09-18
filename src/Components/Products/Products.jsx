import "./Products.css";
import "../../App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const baseUrl = "https://khutta-ma-jutta-backend.herokuapp.com";

const Products = () => {
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   async function getAllShoes() {
  //     const res = await axios.get(`${baseUrl}/api/v1/shoes`);
  //     setProducts(res?.data?.data);
  //   }
  //   getAllShoes();
  // }, []);

  return (
    <section class="product">
      <h2 class="product-category">best selling</h2>
      <button class="pre-btn">
        <img
          src="https://i.postimg.cc/34GmGBGW/image.png"
          alt="asdf"
          height="80px"
        />
      </button>
      <button class="nxt-btn">
        <img
          src="https://i.postimg.cc/34GmGBGW/image.png"
          alt="addddsdf"
          height="80px"
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

export default Products;
