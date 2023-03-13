import { NavLink, useLocation } from "react-router-dom";
import styles from './NavBar.module.css'
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from '../../redux/actions.js'

export default function NavBar(props) {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

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
            {location.pathname === '/favorites' ?
                <div className={styles.orderBar}>
                    <select name="order" onChange={handleOrder} >
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>

                    <select name="filter" onChange={handleFilter} >
                        <option value="none">No filter</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
                : <div className={styles.searchBar}>
                    <SearchBar onSearch={props.onSearch} />
                    <button id={styles.random} onClick={props.onSearchRandom}>🎲 Randomize</button>
                </div>}
        </div>
    )
}