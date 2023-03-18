import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from '../../redux/actions.js'
import styles from './Filter.module.css';

export default Filter = () => {
    const dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return (
        <div>
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

            <div className={styles.searchBar}>
                <SearchBar onSearch={props.onSearch} />
                <button id={styles.random} onClick={props.onSearchRandom}>🎲 Randomize</button>
            </div>
        </div>
    )
}