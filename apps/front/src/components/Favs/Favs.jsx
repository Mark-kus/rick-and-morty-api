import Cards from "../Cards/Cards";

import styles from "./Favs.module.css";

const Favs = ({ characters }) => {
  if (characters.length === 0) {
    return <h1 className={styles.noFavsText}>No hay personajes favoritos</h1>;
  }
  return <Cards characters={characters} />;
};

export default Favs;
