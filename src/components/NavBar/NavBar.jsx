import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar(props) {
    return (
        <div id={styles.navBar}>
            <div className={styles.navLinks}>
                <NavLink className={styles.navLinks} to='/home'>
                    <button className={`${styles.linksHome} ${styles.links}`}>HOME</button>
                </NavLink>
                <NavLink className={styles.navLinks} to='/about'>
                    <button className={`${styles.linksAbout} ${styles.links}`}>ABOUT</button>
                </NavLink>
                <NavLink className={styles.navLinks} to='/favorites'>
                    <button className={`${styles.linksFavorites} ${styles.links}`}>FAVORITES</button>
                </NavLink>
            </div>
            <div className={styles.searchBar}>
                <SearchBar onSearch={props.onSearch} />
                <button id={styles.random} onClick={props.onSearchRandom}>Randomize</button>
            </div>
        </div>
    )
}