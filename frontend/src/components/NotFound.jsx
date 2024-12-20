import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="notfound-page">
      <h1>404 頁面不存在</h1>
      <p>抱歉，您訪問的頁面不存在</p>
      <p className="breathing-text">正在重新導向到首頁...</p>
    </div>
  );
};

export default NotFound;