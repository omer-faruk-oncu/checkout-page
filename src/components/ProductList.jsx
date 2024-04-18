import Product from "./Product";

const ProductList = ({ products, setProducts, getProducts }) => {

  return (
    <div className="product-list container">
      {products?.map((product) => (
        <Product key={product.id} {...product} products={products} setProducts={setProducts} getProducts={getProducts} />
      ))}
    </div>
  );
};

export default ProductList;
