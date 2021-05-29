import React from "react";

function CharacterImage({ image, name }) {
  return <div>
<img src={image} alt={name}></img>

  </div>;
}
export default CharacterImage;
