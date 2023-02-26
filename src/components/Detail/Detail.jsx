import { useParams } from "react-router-dom";

export default function Detail(props) {
    const { characters } = props;
    const { id } = useParams();

    const character = characters.filter(elem => elem.id === id)

    return (
        <div>

        </div>
    )

    // Boton back
    // Name
    // Status
    // Specie
    // Gender
    // Origin
    // Image
}