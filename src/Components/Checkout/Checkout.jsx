import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
import jwt from "jwt-decode";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

import "./Checkout.css";
import { toast } from "react-toastify";
import axios from "axios";

const baseUrl = "https://khutta-ma-jutta-backend.herokuapp.com";

const Checkout = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [isLogin, setLogin] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState();
  const [products, setProducts] = useState();
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    // const fetchCheckout
  }, []);

  useEffect(() => {
    const token = cookies.get("token");

    let user;
    if (token) user = jwt(token);
    console.log(user);
    if (user?.id) setLogin(true);
  }, []);
  if (!isLogin) navigate("/auth/login");

  useEffect(() => {
    async function fetchCart() {
      const res = await axios.get(`${baseUrl}/api/v1/cart`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setProducts(res?.data?.data);
    }
    fetchCart();
  }, [refetch]);

  //   handler
  const incrementQuantity = async (product) => {
    const payload = {
      productId: product?.productId,
      quantity: 1,
      name: product?.name,
      price: product?.price,
    };
    console.log(product);
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
      .then((res) => setRefetch((cur) => !cur))
      .catch((err) => console.log(err));
  };

  const decrementQuantity = async (product) => {
    if (product?.quantity <= 1) {
      toast.warning("Cannot remove item");
      return;
    }
    const payload = {
      productId: product?.productId,
      quantity: -1,
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
      .then((res) => setRefetch((cur) => !cur))
      .catch((err) => console.log(err));
  };
  const deleteProductCartHandler = async (id) => {
    const payload = { productId: id };
    console.log(payload);
    await axios
      .delete(
        `${baseUrl}/api/v1/cart`,
        { ...payload },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => setRefetch((cur) => !cur))
      .catch((err) => console.log(err));
  };
  return (
    <div className="main">
      {products?.map((p) => {
        return (
          <div className="checkout">
            <div className="item">
              <div class="product-image">
                <span class="discount-tag">50% off</span>

                <img src="https://i.postimg.cc/KvVWKjb7/Product03.png" alt="" />
              </div>
              <div className="info">
                <div className="name">{p?.name}</div>
              </div>
            </div>
            <div className="quantity">
              <div className="add" onClick={() => incrementQuantity(p)}>
                <AddIcon />
              </div>
              <div className="total-quantity">
                No of quantity: <span>{p?.quantity}</span>
              </div>
              <div className="remove" onClick={() => decrementQuantity(p)}>
                <RemoveIcon />
              </div>
            </div>
            <div className="price">
              <span>{p?.price}</span>
            </div>
            <div
              className="delete"
              onClick={() => deleteProductCartHandler(p?.productId)}
            >
              <DeleteIcon />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Checkout;
