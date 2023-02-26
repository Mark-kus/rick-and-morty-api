import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar(props) {
    return (
        <div id={styles.navBar}>
            <div className={styles.navLinks}>
                <span>
                    </span><NavLink className={styles.navLink} to='/home'>Home</NavLink>
                <span>
                    </span><NavLink className={styles.navLink} to='/about'>About</NavLink>
            </div>
            <div className={styles.searchBar}>
                <SearchBar onSearch={props.onSearch} />
                <button id={styles.random} onClick={props.onSearchRandom}>Randomize</button>
            </div>
        </div>
    )
}