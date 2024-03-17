import React from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Components/AllRoutes/AllRoutes";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <AllRoutes />
      </div>
      <div className="footer">
        <div className="links">
          <div className="link">
            <h2>Partners </h2>
            <a href="https://Dia.wiki">
              <p>Decentralized Intelligence Agency</p>
            </a>
            <a href="https://WorldVibeWeb.org">
              <p>World Vibe Web</p>
            </a>
            <a href="https://Purplerock.xyz">
              <p>Purplerock</p>
            </a>
          </div>
          <div className="link">
            <h2>Resources</h2>
            <a href="https://www.notion.so/URANUS-Web-7291c569928947758d04c7dc99a3a327?pvs=4">
              <p>Effective Vibes</p>
            </a>
            <a href="https://GoldenMeme.org">
              <p>Golden Meme</p>
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>Made By Jyoti Keshri</p>
        </div>
      </div>
    </>
  );
}

export default App;
