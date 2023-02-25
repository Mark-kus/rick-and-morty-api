import { useState } from "react";

export default function SearchBar(props) {
   const [character, setCharacter] = useState(0);

   const reCalc = () => {
      setCharacter((e) => {
         character = e.target.value;
      });
   }

   return (
      <div>
         <form onSubmit={() => { props.onSearch(character) }}>
            <input type='search' name="idCharacter" onChange={reCalc} />
            <button type="submit">Agregar</button>
         </form>
      </div>
   );
}
