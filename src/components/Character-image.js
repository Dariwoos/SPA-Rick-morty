import React from "react";
import "../css/Character-image.css"
function CharacterImage({ image, name }) {
  return (
    <>
      <img className="character-img" src={image} alt={name}></img>
    </>
  );
}
export default CharacterImage;
