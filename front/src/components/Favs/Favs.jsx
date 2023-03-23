import Cards from "../Cards/Cards";
import favExample from "../../favExample.png";
import styles from './Favs.module.css';

const Favs = ({ characters }) => {
    return (
        <>
            {
                characters.length >= 1
                    ? <Cards characters={characters} />
                    : <div className={styles.instrucciones}>
                        <span>Para agregar una carta a tu lista de favoritos, clickea en la estrella sobre ella</span>
                        <img src={favExample} />
                    </div>
            }
        </>
    )
}

export default Favs;