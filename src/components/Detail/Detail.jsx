import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_BASE}/character/${id}?key=${process.env.REACT_APP_API_KEY}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [id]);

    // Boton back
    // Name
    // Status
    // Specie
    // Gender
    // Origin
    // Image



}