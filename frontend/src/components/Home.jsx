import React from "react";
import "./Home.css";

function Home() {
  const handleClick = () => {
    window.open('https://hackmd.io/@userwei/rkSMNAS0R', '_blank');
  };

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">NYCU GDSC Frontend Training Program</h1>
          <p className="hero-subtitle">煥然一新的學習體驗，從這裡開始</p>
          <button onClick={handleClick} className="hero-button">立即開始</button>
        </div>
      </header>

      <section className="features">
        <h2 className="section-title">課程特色</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>HTML / CSS 基礎</h3>
            <p>從零開始構築網頁基礎，掌握排版及設計美學。</p>
          </div>
          <div className="feature-card">
            <h3>JavaScript 互動</h3>
            <p>學會前端邏輯與動態效果，提升網頁吸引力與可用性。</p>
          </div>
          <div className="feature-card">
            <h3>React 現代開發</h3>
            <p>掌握元件化開發與狀態管理，打造大型單頁應用程式。</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 NYCU GDSC Frontend Training Program. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
