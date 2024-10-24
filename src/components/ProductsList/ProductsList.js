import Product from "../Product/Product";
import products from "../../data/productsData";
import { useState } from "react";

const ProductsList = ({ limit }) => {
  const displayedProducts = limit ? products.slice(0, limit) : products;

  /* const filtredProducts = selectedSize
    ? displayedProducts.filter((product) => product.size === selectedSize)
    : displayedProducts; */

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
          />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
