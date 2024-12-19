import React, { useState } from "react";

function Iris() {
  const [photos, setPhotos] = useState([
    { id: 1, url: "https://i.imgur.com/ttFinej.jpeg", title: "picnic♡₊⁺" },
    { id: 2, url: "https://i.imgur.com/T1Lxcqb.jpeg", title: "𓈒𓏸𓂂 school𓈒𓏸" },
    { id: 3, url: "https://i.imgur.com/PlInIai.jpeg", title: "view⋆౨ৎ˚" },
  ]);
  
  
  // https://i.imgur.com/uogSKbM.jpeg
  
  const [newPhoto, setNewPhoto] = useState({ url: "", title: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPhoto({ ...newPhoto, [name]: value });
  };

  const addPhoto = (e) => {
    e.preventDefault();
    if (newPhoto.url && newPhoto.title) {
      setPhotos((prev) => [
        ...prev,
        { id: prev.length + 1, url: newPhoto.url, title: newPhoto.title },
      ]);
      setNewPhoto({ url: "", title: "" });
    } else {
      alert("請輸入圖片網址和標題( ˃ᯅ˂）");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "50px" }}>
      <h1>攝影作品集</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <img
              src={photo.url}
              alt={photo.title}
              style={{ width: "100%", height: "auto" }}
            />
            <p style={{ padding: "10px 0", margin: 0 }}>{photo.title}</p>
          </div>
        ))}
      </div>

      <form
        onSubmit={addPhoto}
        style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}
      >
        <h2>新增照片 🎞️</h2>
        <input
          type="text"
          name="url"
          placeholder="圖片網址"
          value={newPhoto.url}
          onChange={handleInputChange}
          style={{ marginBottom: "10px", padding: "8px", fontSize: "16px" }}
        />
        <input
          type="text"
          name="title"
          placeholder="照片標題"
          value={newPhoto.title}
          onChange={handleInputChange}
          style={{ marginBottom: "10px", padding: "8px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#f9c0c4",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          新增
        </button>
      </form>
    </div>
  );
}

export default Iris;
