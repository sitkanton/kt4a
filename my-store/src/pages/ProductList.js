import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import "../styles/ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Ошибка загрузки товаров:", error));
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} />
          <h3>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </h3>
          <Rating rating={product.rating.rate} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
