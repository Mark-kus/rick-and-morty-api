import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

import { orderCards, filterCards } from "../../redux/actions.js";
import { useAppDispatch } from "../../redux/redux.js";

import styles from "./NavBar.module.css";

const DependantBar = ({ onSearch, onSearchRandom, searching }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const [character, setCharacter] = useState({
    id: null,
  });

  const reCalc = (e) => {
    const value = e.target.value;
    setCharacter({
      id: value,
    });
  };

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  if (location.pathname === "/about") {
    return null;
  }

  if (location.pathname === "/favorites") {
    return (
      <div className={styles.favoritesDependantBar}>
        <select name="order" onChange={handleOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <select name="filter" onChange={handleFilter}>
          <option value="none">No filter</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    );
  }

  return (
    <div className={styles.searchDependantBar}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(character);
          e.target.reset();
          setCharacter({ id: null });
        }}
        className={styles.addForm}
      >
        <input
          placeholder="123"
          autoComplete="off"
          type="search"
          className={styles.searchInput}
          name="id"
          onChange={reCalc}
          value={character.id}
        />
        <button disabled={searching} className={styles.addButton} type="submit">
          Add
        </button>
      </form>
      <button
        disabled={searching}
        className={styles.random}
        onClick={onSearchRandom}
      >
        🎲 <span className={styles.randomText}>Randomize</span>
      </button>
    </div>
  );
};

export default function NavBar(props) {
  return (
    <div className={styles.allNavbar}>
      <div className={styles.navBar}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.navLinks
          }
          to="/"
        >
          HOME
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.navLinks
          }
          to="/about"
        >
          ABOUT
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.notMobile}` : `${styles.navLinks} ${styles.notMobile}`
          }
          to="/favorites"
        >
          FAV
        </NavLink>
      </div>

      <DependantBar
        onSearch={props.onSearch}
        onSearchRandom={props.onSearchRandom}
        searching={props.searching}
      />

    </div>
  );
}
