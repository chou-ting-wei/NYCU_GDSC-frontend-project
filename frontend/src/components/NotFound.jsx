import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-page">
      <h1>404 - 頁面不存在</h1>
      <p>抱歉，您訪問的頁面不存在。</p>
      <Link to="/" className="back-home-link">
        返回首頁
      </Link>
    </div>
  );
};

export default NotFound;
