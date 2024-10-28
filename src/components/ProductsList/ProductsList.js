import Product from "../Product/Product";
import defaultProducts from "../../data/productsData";

const ProductsList = ({ limit, products }) => {
  const productsToDisplay =
    products && products.length > 0 ? products : defaultProducts;
  const displayedProducts = limit
    ? productsToDisplay.slice(0, limit)
    : displayedProducts;

  return (
    <>
      <div className="main_content_3_items">
        {displayedProducts.map((product, index) => (
          <Product
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            size={product.size}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
