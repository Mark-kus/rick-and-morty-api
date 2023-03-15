import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from './Detail.module.css';

export default function Detail(props) {
    const { characters } = props;
    const { id } = useParams();
    const [first, setFirst] = useState()
    const [character] = characters.filter((elem) => elem.id === Number(id))
    const goFetch = character;
    console.log(character)

    useEffect(() => {
        fetch(`http://localhost:3001/detail/${goFetch}`)
        // fetch(`${character.episode[0]}?key=${process.env.REACT_APP_API_KEY}`)
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

    // Boton back

    // Origin
    // Image

    // type
    // :
    // ""
    // gender
    // :
    // "Male"


    // location
    // :
    // {name: "Citadel of Ricks", url: "http://be-a-rym.up…}
    // image
    // :
    // "https://rickandmortyapi.com/api/character/avatar/480.jpeg"

    // episode
    // :
    // ["http://be-a-rym.up.railway.app/api/episode/28"]
    // url
    // :
    // "http://be-a-rym.up.railway.app/api/character/480"
    // created
    // :
    // "Wed Jan 18 2023 18:38:03 GMT+0000 (Coordinated Universal Time)"

}