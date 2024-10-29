import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail({ characters }) {
  const { id } = useParams();
  const [first, setFirst] = useState();
  const character = characters.find((elem) => Number(elem.id) === Number(id));
  const goFetch = character.episode[0].replace(
    "https://rickandmortyapi.com/api/episode/",
    ""
  );

  useEffect(() => {
    fetch(`http://localhost:3001/detail/${goFetch}`)
      .then((response) => response.json())
      .then((data) => {
        setFirst({
          ...data,
        });
      });
  }, [goFetch]);

  return (
    <div className={styles.container}>
      <Link to="/">
        <button className={styles.backButton}>X</button>
      </Link>
      <div className={styles.dataContainer}>
        <div className={styles.data}>
          <span>Name: {character.name}</span>
          <span>Species: {character.species}</span>
          <span>Gender: {character.gender}</span>
          <span>Status: {character.status}</span>
          <span>Origin: {character.origin.name}</span>
          {first ? <span>First encounter: "{first.name}"</span> : ""}
        </div>
        <div>
          <img className={styles.image} src={character.image} alt={character.name} />
        </div>
      </div>
    </div>
  );
}
