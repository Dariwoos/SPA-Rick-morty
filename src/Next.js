import React,{useContext} from 'react'
import CharacterContext from "./CharacterContext.js";
import api from "./api"
export default function Next({next,back}) {

    const context =useContext(CharacterContext);
    console.log(context)
    async function handleClick(){
        context.setCharacter(await api.getCharacter(context.character.id + 1));
    }   async function handleBack() {
      context.setCharacter(await api.getCharacter(context.character.id - 1));
    }
    return (
        <div>
           <button onClick={handleClick}>{next}Next</button> 
           {context.character.id > 1 ? <button onClick={handleBack}>{back} Back</button>: null}
        </div>
    )
}
