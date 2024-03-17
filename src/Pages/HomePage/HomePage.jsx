import React from "react";
import Memes from "../../Components/Memes/Memes";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./HomePage.css";
import Footer from "../../Components/Footer/Footer";

const HomePage = ({ memes }) => {
  const [text] = useTypewriter({
    words: [
      "Want to have some good memes to share?",
      "You've come to the right place!",
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="home-container">
      <div className="animated-text">
        <span>{text}</span>
        <span>
          <Cursor />
        </span>
      </div>
      <div className="text">
        <h1>URANUS MEMES</h1>
      </div>
      <Memes memes={memes} />
    </div>
  );
};

export default HomePage;
