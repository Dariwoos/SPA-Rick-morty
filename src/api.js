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
       "https://3000-green-damselfly-o61c1gdn.ws-eu08.gitpod.io/json/"+id  
     );
     const data = await response.json();
     return data;
   }
 }


const api = new API()
export default api;