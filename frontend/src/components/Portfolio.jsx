import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  const works = [
    {
      title: "張書蓉",
      description: "攝影作品集",
      link: "/iris",
      image: "https://via.placeholder.com/400x250?text=Iris",
    },
    {
      title: "葉芊妤",
      description: "Album Gallery",
      link: "/Cy407",
      image: "https://via.placeholder.com/400x250?text=Cy407",
    },
    {
      title: "馮郇軒",
      description: "To-Do List",
      link: "/FHH",
      image: "https://via.placeholder.com/400x250?text=FHH",
    },
  ];

  return (
    <div className="portfolio-page">
      <header className="portfolio-hero">
        <div className="portfolio-hero-content">
          <h1 className="portfolio-title">作品集</h1>
          <p className="portfolio-subtitle">展現學員們的心血結晶</p>
        </div>
      </header>

      <section className="work-gallery">
        <h2 className="section-title">作品展示</h2>
        <div className="work-cards">
          {works.map((work, index) => (
            <div className="work-card" key={index}>
              <div className="work-image-wrapper">
                <img src={work.image} alt={work.title} className="work-image" />
              </div>
              <h3 className="work-card-title">{work.title}</h3>
              <p className="work-card-desc">{work.description}</p>
              <Link to={work.link} className="work-link">
                查看作品
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="portfolio-footer">
        <p>© 2024 NYCU GDSC Frontend Training Program. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
