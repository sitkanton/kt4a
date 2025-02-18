import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404 - Страница не найдена</h1>
      <button onClick={() => navigate("/products")}>На главную</button>
    </div>
  );
};

export default NotFoundPage;
