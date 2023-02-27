import { Link } from "react-router-dom";
import styles from './Card.module.css'

export default function Card(props) {
   const { characters } = props;
   return (
      <div className={styles.card} >
         <button className={styles.closeButton} onClick={() => { props.onClose(characters.id) }}><strong>X</strong></button>
         <div className={styles.topData}>
            <h4>{characters.name}</h4>
            <h5>{characters.status}</h5>
         </div>
         <Link to={`/detail/${characters.id}`}>
            <img className={styles.charImg} src={characters.image} alt={`Imagen de ${characters.name}`} />
         </Link>
         <div className={styles.bottomData}>
            <h5>{characters.species}</h5>
            <h5>{characters.gender}</h5>
         </div>
      </div>
   );
}
