import Cards from "../Cards/Cards";
import favExample from "../../assets/favExample.png";
import styles from './Favs.module.css';

const Favs = ({ characters }) => {
    return (
        <>
            {
                characters.length >= 1
                    ? <Cards characters={characters} />
                    : <div className={styles.instrucciones}>
                        <span>To add a new favorite card, go to 'HOME' and click on the star above</span>
                        <img src={favExample} />
                    </div>
            }
        </>
    )
}

export default Favs;