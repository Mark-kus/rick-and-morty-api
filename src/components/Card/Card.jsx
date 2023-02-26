import { Link } from "react-router-dom";
import styles from './Card.module.css'

export default function Card(props) {
   const { characters } = props;
   return (
      <div className={styles.card} >
         <button className={styles.closeButton} onClick={() => { props.onClose(characters.id) }}><strong>X</strong></button>
         <div className={styles.topData}>
            <h3>{characters.name}</h3>
            <h4>{characters.status}</h4>
         </div>
         <Link to={`/detail/${characters.id}`}>
            <img className={styles.charImg} src={characters.image} alt={`Imagen de ${characters.name}`} />
         </Link>
         <div className={styles.bottomData}>
            <h4>{characters.species}</h4>
            <h4>{characters.gender}</h4>
         </div>
      </div>
   );
}
