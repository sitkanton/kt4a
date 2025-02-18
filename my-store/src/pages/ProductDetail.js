import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "../components/Rating";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Ошибка загрузки товара:", error));
  }, [id]);

  if (!product) return <p>Загрузка...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div className="details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <Rating rating={product.rating.rate} />
        <button onClick={() => navigate(-1)}>Назад</button>
      </div>
    </div>
  );
};

export default ProductDetail;
