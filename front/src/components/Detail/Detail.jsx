import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from './Detail.module.css';

export default function Detail(props) {
    const { characters } = props;
    const { id } = useParams();
    const [first, setFirst] = useState();
    const [character] = characters.filter((elem) => elem.id === id);
    let goFetch = character.episode[0];
    goFetch = goFetch.replace('https://be-a-rym.up.railway.app/api/episode/', '');

    useEffect(() => {
        fetch(`http://localhost:3001/detail/${goFetch}`)
            .then((response) => response.json())
            .then((data) => {
                setFirst({
                    ...data
                })
            })
    }, [])

    return (
        <div className={styles.container}>
            <Link to='/home'><button className={styles.backButton} >&#5130;</button></Link>
            <div className={styles.dataContainer}>
                <div className={styles.data}>
                    <span>Name: {character.name}</span>
                    <span>Species: {character.species}</span>
                    <span>Gender: {character.gender}</span>
                    <span>Status: {character.status}</span>
                    <span>Origin: {character.origin.name}</span>
                    {first ? <span>First encounter: "{first.name}"</span> : ''}
                </div>
                <div>
                    <img className={styles.image} src={character.image} />
                </div>
            </div>
        </div>
    )
}