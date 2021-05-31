import React from "react"
import "../css/Character-name.css"
function CharacterName({name}){
    return (
      <>
        <h4 className="Character-name">{name}</h4>
      </>
    );
}
export default CharacterName;