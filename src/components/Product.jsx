import React, { useState } from "react";
import axios from "axios";
import { FaRegMinusSquare, FaRegPlusSquare } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const Product = ({
  id,
  name,
  price,
  image,
  products,
  setProducts,
  getProducts,
}) => {
  const taxRate = 0.18;
  const shipping = 25;

  const [amount, setAmount] = useState(1);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_URL}${id}`);
    } catch (error) {
      console.log(error);
    }
    getProducts();
  };

  return (
    <div>
      <div key={id} className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt={name} />
          </div>
          <div className="col-md-8">
            <div className="card-body text-justify">
              <h5 className="card-title">{name}</h5>
              <div className="card-text">
                <p>Price : ${price}</p>
                <div className="buttons fs-4 m-2 border border-2 text-center rounded-2">
                  <span
                    className="me-2 text-danger"
                    onClick={() => setAmount(amount > 1 ? amount - 1 : amount)}
                  >
                    <FaRegMinusSquare />
                  </span>
                  {amount}
                  <span
                    className="ms-2 text-danger"
                    onClick={() => setAmount(amount + 1)}
                  >
                    <FaRegPlusSquare />
                  </span>
                </div>
              </div>
              <div>
                <div className="border border-2 text-center bg-danger text-white rounded-2 m-2" onClick={() => handleRemove(id)}>
                  <span className="me-2 fs-4"><RiDeleteBinLine /></span>
                  Remove
                </div>
              </div>
              <p className="card-text">
                <small className="text-body-secondary">
                  Product Total: ${(price * amount).toFixed(2)}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Subtotal: ${(price * amount).toFixed(2)} </p>
        <p>Tax(%18): ${(price * amount * taxRate).toFixed(2)}</p>
        <p>Shipping: ${shipping} </p>
        <p>
          Total: $
          {(price * amount + price * amount * taxRate + shipping).toFixed(2)}{" "}
        </p>
      </div>
    </div>
  );
};

export default Product;
