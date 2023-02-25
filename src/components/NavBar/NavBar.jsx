import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar(props) {
    return (
        <div>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}