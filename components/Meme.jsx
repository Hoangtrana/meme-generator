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

  function handleChange(event) {
    setMeme((prevMeme) => {
      const { name, value } = event.target;
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getRandomImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} className="meme-image" />
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </main>
  );
}

export default Meme;
