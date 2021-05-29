import React,{useEffect, useState} from "react"
import './App.css';
import Character from "./Character.js"
import api from "./api.js";
import CharacterName from "./Character-name.js"
import CharacterImage from "./Character-image";
import CharacterDescription from "./Character-Description";
import Layout from "./Layout.js"
import Next from "./Next.js"
import CharacterContext from "./CharacterContext.js"
import BankData from "./BankData.js"



function App() {

      const [character, setCharacter] = useState({});

      const [dataBank, setDataBank] = useState({})

      useEffect(() => {
        async function getCharacter() {
          setCharacter(await api.getCharacter(1));
          // const person =
          //console.log(person);
        }
        getCharacter();
      }, []);
      useEffect(()=>{
        async function getDataBank(){
          setDataBank(await api.getDataBank(1))
        }
      },[])


  return (
    <CharacterContext.Provider
      value={{
        character,
        setCharacter,
      }}
    >
      <Layout
        name={<CharacterName name={character.name} />}
        image={<CharacterImage image={character.image} name={character.name} />}
        description={
          <CharacterDescription
            gender={character.gender}
            species={character.species}
            status={character.status}
          />
        }
        next={<Next></Next>}
        bankData={<BankData data={dataBank.loan} />}
      />
    </CharacterContext.Provider>
  );
}

export default App;
