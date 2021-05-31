import React,{useContext} from 'react'
import CharacterContext from "../context+api/CharacterContext.js";
import DataContext from "../context+api/DataContext.js";
import api from "../context+api/api"
import "../css/Next.css";


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
      <div className="container">
        <div className="row">
          <button className="btn btn-success in-mid" onClick={handleClick}>
            {next}Next
          </button>
          {context.character.id > 1 ? (
            <button className="btn btn-warning in-mid" onClick={handleBack}>
              {back} Back
            </button>
          ) : null}
        </div>
      </div>
    );
}
