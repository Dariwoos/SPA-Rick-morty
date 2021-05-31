import React ,{useEffect, useState} from 'react'
import api from "../context+api/api.js"


export default function Options(name) {

      const [personalities, setPersonalities] = useState([]);
      const [id, setId] = useState(0)
      const [receiver, setReceiver] = useState(0);
      const [amount, setAmount] = useState(0)

          useEffect(() => {
            async function getAllData() {
              setPersonalities(await api.getAllData());
            }
            getAllData();
          }, []);


          const handleClick = e => {
              e.preventDefault();
              function sendTransfer(){
              setId({...id, [e.target.name]: e.target.value})
              setReceiver({...receiver, [e.target.name]:e.target.value})
              setAmount({...amount, [e.target.name]:e.target.value})
             api.transfer(id,receiver,amount);
              }
              sendTransfer()
          }

    return (
      <form onSubmit={handleClick}>
        <select>
          {" "}
          {personalities.map((index, key) => {
            return (
              <option value={index.id} name="sender" key={key}>
                {index.name}
              </option>
            );
          })}{" "}
        </select>

        <select>
          {" "}
          {personalities.map((index, key) => {
            return (
              <option value={index.id} name="receiver" key={key}>
                {index.name}{" "}
              </option>
            );
          })}{" "}
        </select>
        <input name="amount" type="text"></input>
        <input type="submit" ></input>
      </form>
    );
}
