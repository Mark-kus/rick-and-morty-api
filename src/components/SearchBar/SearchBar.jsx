import { useState } from "react";

export default function SearchBar(props) {
   const [character, setCharacter] = useState({
      id: 0
   });

   const reCalc = (e) => {
      const value = e.target.value;
      setCharacter({
         id: value
      });
   }

   return (
      <div>
         <form onSubmit={(e) => { e.preventDefault(); props.onSearch(character) }}>
            <input type='search' name="id" onChange={reCalc} />
            <button type="submit">Agregar</button>
         </form>
      </div>
   );
}
