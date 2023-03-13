import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, deleteFav } from "../../redux/actions";
import styles from './Card.module.css'

export default function Card(props) {
   const { character } = props;

   const dispatch = useDispatch();

   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector(state => state.myFavorites);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(!isFav);
         dispatch(deleteFav(character.id));
      } else {
         setIsFav(!isFav);
         dispatch(addFav(character));
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.card} >
         {
            props.onClose ? (
               <button className={`${styles.button} ${styles.closeBut}`} onClick={() => { props.onClose(character.id) }}><strong>x</strong></button>
            ) : ''}
         {
            isFav ? (
               <button className={`${styles.button} ${styles.favBut}`} onClick={handleFavorite}>★</button>
            ) : (
               <button className={`${styles.button} ${styles.favBut}`} onClick={handleFavorite}>☆</button>
            )
         }
         <Link to={`/detail/${character.id}`}>
            <img className={styles.img} src={character.image} alt={`Imagen de ${character.name}`} />
         </Link>
         <div className={styles.data}>
            <h4>{character.name}</h4>
         <div className={styles.subData}>
            <h5>{character.gender}</h5>
            <h5>{character.species}</h5>
         </div>
         </div>
      </div>
   );
}
