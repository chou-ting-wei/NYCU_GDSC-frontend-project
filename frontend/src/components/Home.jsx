// src/components/Home.jsx
import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>當前計數：{count}</p>
      <button className="btn" onClick={() => setCount(count + 1)}>增加</button>
      <button className="btn" onClick={() => setCount(count - 1)}>減少</button>
     
    </div>
  );
}

export default Home;