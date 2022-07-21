import React from "react";
import memesData from "../memesData";

function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  function getRandomImage() {
    const memesArray = memesData.data.memes;
    const getRandomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[getRandomNumber].url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getRandomImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} className="meme-image" />
    </main>
  );
}

export default Meme;
