import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
   // console.log(props)
   return (
      <div>
         {characters ? characters.map(element =>
            <li key={element.id}>
               <Card
                  name={element.name}
                  species={element.species}
                  gender={element.gender}
                  image={element.image}
                  onClose={element.onClose}
               />
            </li>) : 'No hay personajes guardados'}
      </div>
   )
}
