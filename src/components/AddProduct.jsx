import axios from "axios";
import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";

const AddProduct = ({ getProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState();
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { name, price, amount, image };
    //console.log(newProduct);
    postProduct(newProduct);
    setName("");
    setPrice(0);
    setAmount(1);
    setImage("");
  };

  const postProduct = async (newProduct) => {
    try {
      await axios.post(process.env.REACT_APP_URL, newProduct);
    } catch (error) {
      console.log(error);
    }
    getProducts();
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Product Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image-url" className="form-label">
            Product Image
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">
              https://example.com/
            </span>
            <input
              type="text"
              className="form-control"
              id="image-url"
              aria-describedby="basic-addon3 basic-addon4"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="form-text" id="basic-addon4"></div>
        </div>
        <button type="submit" className="btn btn-success mb-4 mx-auto d-block">
          <span className="fs-4"><GiShoppingCart /> </span>
          Add To Cart
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
