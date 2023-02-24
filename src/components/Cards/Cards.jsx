// import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {characters.map(element =>
            <li key={element.id}>
               <Card
                  name={element.name}
                  species={element.species}
                  gender={element.gender}
                  image={element.image}
               />
            </li>)}
      </div>
   )
}
