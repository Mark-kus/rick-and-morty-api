import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function NavBar(props) {
    return (
        <div>
            <SearchBar onSearch={props.onSearch} />
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>
    )
}