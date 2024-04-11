import Product from "./Product";

const ProductList = ({ products, setProducts, getProducts }) => {
  console.log(products);

  if(products.length === 0) {
    return <p>No products data...</p>
  }

  return (
    <div className="product-list container">
      {products?.map((product) => (
        <Product key={product.id} {...product} products={products} setProducts={setProducts} getProducts={getProducts} />
      ))}
    </div>
  );
};

export default ProductList;
