import React, { useState, useEffect } from "react";

// Cy407 組件
function Cy407() {
  // 初始化專輯列表，從 localStorage 讀
  const [albums, setAlbums] = useState(() => {
    const savedAlbums = localStorage.getItem("albums");
    return savedAlbums ? JSON.parse(savedAlbums) : []; // 如果有資料則從 localStorage 讀取，否則設為空陣列
  });

  const [albumTitle, setAlbumTitle] = useState(""); // 專輯名稱
  const [albumDescription, setAlbumDescription] = useState(""); // 專輯介紹
  const [albumCover, setAlbumCover] = useState(null); // 專輯封面
  const [albumSpotify, setAlbumSpotify] = useState(""); // Spotify 連結

  // 處理圖片上傳
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAlbumCover(reader.result); // 顯示圖片
      };
      reader.readAsDataURL(file);
    }
  };

  // 新增專輯
  const addAlbum = () => {
    if (!albumTitle || !albumDescription || !albumCover || !albumSpotify) {
      alert("請填寫所有欄位><");
      return;
    }

    const newAlbum = {
      title: albumTitle,
      description: albumDescription,
      cover: albumCover,
      spotify: albumSpotify, // 使用者提供的 Spotify 連結
    };

    const updatedAlbums = [...albums, newAlbum]; // 新增專輯
    setAlbums(updatedAlbums);
    localStorage.setItem("albums", JSON.stringify(updatedAlbums)); // 更新 localStorage
    setAlbumTitle(""); // 清空表單
    setAlbumDescription("");
    setAlbumCover(null);
    setAlbumSpotify("");
  };

  // 刪除專輯
  const deleteAlbum = (index) => {
    const updatedAlbums = albums.filter((_, i) => i !== index); // 過濾掉要刪除的專輯
    setAlbums(updatedAlbums);
    localStorage.setItem("albums", JSON.stringify(updatedAlbums)); // 更新 localStorage
  };

  return (
    <div style={containerStyle}>
      <h1>⋆Album Gallery🎧⋆</h1>

      {/* 表單 */}
      <div style={formStyle}>
        <input
          type="text"
          placeholder="專輯名稱"
          value={albumTitle}
          onChange={(e) => setAlbumTitle(e.target.value)}
          style={inputStyle}
        />
        <textarea
          placeholder="創作者名稱"
          value={albumDescription}
          onChange={(e) => setAlbumDescription(e.target.value)}
          style={inputStyle}
        />
        <input
          type="file"
          onChange={handleImageChange}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Spotify 連結"
          value={albumSpotify}
          onChange={(e) => setAlbumSpotify(e.target.value)}
          style={inputStyle}
        />
        <button onClick={addAlbum} style={buttonStyle}>
          +新增專輯
        </button>
      </div>

      {/* 顯示專輯列表 */}
      <div style={albumsListStyle}>
        {albums.map((album, index) => (
          <div key={index} style={albumCardStyle}>
            {/* 顯示專輯封面 */}
            <img
              src={album.cover}
              alt={album.title}
              style={albumCoverStyle}
            />
            {/* 顯示專輯標題和介紹 */}
            <h3>{album.title}</h3>
            <p>{album.description}</p>
            {/* 顯示 Spotify 連結 */}
            <a
              href={album.spotify}
              target="_blank"
              rel="noopener noreferrer"
              style={spotifyLinkStyle}
            >
              在 Spotify 上聽
            </a>
            {/* 刪除按鈕 */}
            <button
              onClick={() => deleteAlbum(index)}
              style={deleteButtonStyle}
            >
              -刪除專輯
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// 樣式設定
const containerStyle = {
  textAlign: "center",
  fontFamily: "Arial",
  padding: "20px",
};

const formStyle = {
  marginBottom: "20px",
};

const inputStyle = {
  display: "block",
  width: "80%",
  margin: "10px auto",
  padding: "10px",
};

const buttonStyle = {
  padding: "10px 20px",
  margin: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const albumsListStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
};

const albumCardStyle = {
  width: "300px",
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  textAlign: "center",
  backgroundColor: "#f9f9f9",
  boxSizing: "border-box", // 使圖片不超過卡片範圍
};

const albumCoverStyle = {
  width: "100%",
  height: "300px", // 這裡可以調整框框的高度，確保圖片不會被切掉
  objectFit: "contain", // 確保圖片不被裁切，並且保持原有比例
  borderRadius: "10px",
};

const spotifyLinkStyle = {
  display: "block",
  marginTop: "10px",
  color: "#1db954", // Spotify 綠色
  textDecoration: "none",
};

const deleteButtonStyle = {
  padding: "5px 10px",
  marginTop: "10px",
  backgroundColor: "#f44336", // 紅色
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Cy407;
