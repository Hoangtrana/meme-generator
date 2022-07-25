import React from "react";
import memesData from "../memesData";

function Meme() {
  /*const [memeImage, setMemeImage] = React.useState(
    "http://i.imgflip.com/1bij.jpg"
  );*/

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allImages, setAllImage] = React.useState(memesData);

  function getRandomImage() {
    const memesArray = allImages.data.memes;
    const getRandomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme(() => ({
      ...meme,
      randomImage: memesArray[getRandomNumber].url,
    }));
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
      <img src={meme.randomImage} className="meme-image" />
    </main>
  );
}

export default Meme;
