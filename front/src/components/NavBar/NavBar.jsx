import { NavLink, useLocation } from "react-router-dom";
import styles from './NavBar.module.css';
import title from '../../assets/title.png';
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from '../../redux/actions.js'
import { useState } from "react";

export default function NavBar(props) {
    const [character, setCharacter] = useState({
        id: 0
    });
    const location = useLocation();
    const dispatch = useDispatch();

    const reCalc = (e) => {
        const value = e.target.value;
        setCharacter({
            id: value
        });
    }

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return (
        <div className={styles.allNavbar}>
            <div className={styles.navBar}>
                <img className={styles.titleImg} src={title} alt='Rick and Morty title' />

                <NavLink className={({ isActive }) => isActive ? styles.active : styles.navLinks} to='/home'>
                    HOME
                </NavLink>

                <NavLink className={({ isActive }) => isActive ? styles.active : styles.navLinks} to='/about'>
                    ABOUT
                </NavLink>

                <NavLink className={({ isActive }) => isActive ? styles.active : styles.navLinks} to='/favorites'>
                    FAV
                </NavLink>
            </div>

            {location.pathname === '/favorites' ?
                <div className={styles.dependantBar}>
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
                : <div className={styles.dependantBar}>
                        <form onSubmit={(e) => { e.preventDefault(); props.onSearch(character) }} className={styles.addForm}>
                            <input autoComplete="off" type='search' className={styles.searchInput} name="id" onChange={reCalc} />
                            <button className={styles.addButton} type="submit">Add</button>
                        </form>
                            <button className={styles.random} onClick={props.onSearchRandom}>🎲 Randomize</button>
                </div>}

        </div>
    )
}