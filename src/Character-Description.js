import React from "react";

function CharacterDescription({ gender, status, species }) {
  return <div>{status} {gender} {species} </div>;
}
export default CharacterDescription;
