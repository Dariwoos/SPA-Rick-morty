import React,{useEffect, useState} from "react"
import './App.css';
import api from "./api.js";
import CharacterName from "./Character-name.js"
import CharacterImage from "./Character-image";
import CharacterDescription from "./Character-Description";
import Layout from "./Layout.js"
import Next from "./Next.js"
import CharacterContext from "./CharacterContext.js"
import DataContext from "./DataContext.js";
import BankData from "./BankData.js"



function App() {

      const [character, setCharacter] = useState({});

      const [dataBank, setDataBank] = useState({})



      useEffect(() => {
        async function getCharacter() {
          setCharacter(await api.getCharacter(1));

        }
        getCharacter();
      }, []);


      useEffect(()=>{
        async function getDataBank(){
          setDataBank(await api.getDataBank(1))
        }
        getDataBank();
      },[])


  return (
    <DataContext.Provider
      value={{
        dataBank,
        setDataBank,
      }}
    >
      <CharacterContext.Provider
        value={{
          character,
          setCharacter,
        }}
      >
        <Layout
          name={<CharacterName name={character.name} />}
          image={
            <CharacterImage image={character.image} name={character.name} />
          }
          description={
            <CharacterDescription
              gender={character.gender}
              species={character.species}
              status={character.status}
            />
          }
          next={<Next/>}
          bankData={<BankData loan={dataBank.loan} balance={dataBank.balance} dues={dataBank.dues} payments={dataBank.payments} />}
        />
      </CharacterContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
