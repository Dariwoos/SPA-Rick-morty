 class API {
   async getCharacter(id) {
     const response = await fetch(
       "https://rickandmortyapi.com/api/character/" + id
     );
     const data = await response.json();
     return data;
   }

   async getDataBank(id) {
     const response = await fetch(
       "https://3000-green-damselfly-o61c1gdn.ws-eu08.gitpod.io/json/" + id
     );
     const data = await response.json();
     return data;
   }

   async getAllData() {
     const response = await fetch(
       "https://3000-green-damselfly-o61c1gdn.ws-eu08.gitpod.io/all/json"
     );
     const data = await response.json();
     return data;
   }
   transfer( id,  receiver, amount ) {
     fetch(
       "https://3000-green-damselfly-o61c1gdn.ws-eu08.gitpod.io/edit/json",
       {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
           sender_id: id,
           resiver_id: receiver,
           amount: amount,
         }),
       }
     )
       .then((response) => response.text())
       .then((result) => console.log(result))
       .catch((error) => console.log(error, "error en transfer"));
   }
 }

const api = new API()
export default api;