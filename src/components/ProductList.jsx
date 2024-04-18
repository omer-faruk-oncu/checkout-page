import Product from "./Product";

const ProductList = ({
  products,
  setProducts,
  getProducts,
  quantity,
  setQuantity,
}) => {
  return (
    <div className="product-list container">
      {products?.map((product) => (
        <Product
          key={product.id}
          {...product}
          products={products}
          setProducts={setProducts}
          getProducts={getProducts}
          quantity={product.quantity}
          setQuantity={setQuantity}
        />
      ))}
    </div>
  );
};

export default ProductList;
