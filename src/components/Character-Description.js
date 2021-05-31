import React from "react";

function CharacterDescription({ gender, status, species }) {
  return <>Status: {status} <br/> Gender: {gender} <br/> Species: {species} </>;
}
export default CharacterDescription;
