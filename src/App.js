import React,{Fragment, useEffect, useState} from "react"
import './css/App.css';
import api from "./context+api/api.js";
import CharacterName from "./components/Character-name.js"
import CharacterImage from "./components/Character-image";
import CharacterDescription from "./components/Character-Description.js";
import Layout from "./Layout.js"
import Next from "./components/Next.js"
import CharacterContext from "./context+api/CharacterContext.js"
import DataContext from "./context+api/DataContext.js";
import BankData from "./components/BankData.js"
import Navbar from "./components/Navbar.js"
import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout.js"
import PersonalData from "./components/PersonalData.js"
import Options from "./components/Options.js"

function App() {

      const [character, setCharacter] = useState({});

      const [dataBank, setDataBank] = useState({})

      const [personalities, setPersonalities]= useState({});


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


                useEffect(() => {
                  async function getAllData() {
                    setPersonalities(await api.getAllData());
                  }
                  getAllData();
                }, []);
        



  return (
    <Fragment>
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
            navbar={
              <Navbar
                loginButton={<LoginButton />}
                logout={<LogoutButton />}
                personaldata={<PersonalData />}
              />
            }
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
            next={<Next />}
            bankData={
              <BankData
                loan={dataBank.loan}
                balance={dataBank.balance}
                dues={dataBank.dues}
                payments={dataBank.payments}
              />
            }
           options={<Options/>}
          />
        </CharacterContext.Provider>
      </DataContext.Provider>
    </Fragment>
  );
}

export default App;
