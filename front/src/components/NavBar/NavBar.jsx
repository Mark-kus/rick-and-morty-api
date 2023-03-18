import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

export default function NavBar() {

    return (
        <div id={styles.navBar}>
            <div className={styles.navLinks}>

                <NavLink className={({ isActive }) => isActive ? styles.active : styles.navLinks} to='/home'>
                    <button className={`${styles.linksHome} ${styles.links}`}>HOME</button>
                </NavLink>

                <NavLink className={({ isActive }) => isActive ? styles.active : styles.navLinks} to='/about'>
                    <button className={`${styles.linksAbout} ${styles.links}`}>ABOUT</button>
                </NavLink>

                <NavLink className={({ isActive }) => isActive ? styles.active : styles.navLinks} to='/favorites'>
                    <button className={`${styles.linksFavorites} ${styles.links}`}>FAVORITES</button>
                </NavLink>

            </div>
        </div>
    )
}