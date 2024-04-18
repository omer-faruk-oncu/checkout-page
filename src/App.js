import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import axios from "axios";
import React, { useEffect, useState } from "react";


function App() {
  const [products, setProducts] = useState([]);
  const [showBar, setShowBar] = useState(true);
  const [quantity, setQuantity] = useState();

  const handleShow = () => {
    setShowBar(!showBar);
  };

  const getProducts = async () => {
    try {
      const res = await axios(process.env.REACT_APP_URL);
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <h1 className="text-center m-4 text-danger">Checkout Page</h1>
      <div className="text-center m-4">
        <button className="mt-4 d-block mx-auto text-bg-dark rounded-2" onClick={handleShow}>
          {showBar ? "Hide Product Bar" : "Show Product Bar"}
        </button>
      </div>
      <div className="d-flex justify-content-center gap-2">
        {showBar && <AddProduct getProducts={getProducts} quantity={quantity} setQuantity={setQuantity}/>}
        <ProductList products={products} setProducts={setProducts} getProducts={getProducts} quantity={quantity} setQuantity={setQuantity} />
      </div>
    </div>
  );
}

export default App;
