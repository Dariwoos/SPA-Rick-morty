import React,{useContext} from 'react'
import CharacterContext from "./CharacterContext.js";
import DataContext from "./DataContext.js";
import api from "./api"
export default function Next({next,back}) {

    const context =useContext(CharacterContext);
    const data = useContext(DataContext);


    async function handleClick(){
        context.setCharacter(await api.getCharacter(context.character.id + 1));
        data.setDataBank(await api.getDataBank(data.dataBank.id + 1));
    } 
    
    
    async function handleBack() {
      context.setCharacter(await api.getCharacter(context.character.id - 1));
       data.setDataBank(await api.getDataBank(data.dataBank.id - 1));

    }
    



    return (
        <div>
           <button onClick={handleClick}>{next}Next</button> 
           {context.character.id > 1 ? <button onClick={handleBack}>{back} Back</button>: null}
        </div>
    )
}
