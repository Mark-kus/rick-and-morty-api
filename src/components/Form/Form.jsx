import { useState } from "react";

export default function Form(props) {
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, seterrors] = useState({ username: '', password: '' });

    const handleInputChange = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        setUserData({
            ...userData,
            [property]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // props.login(userData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username"></label>
            <input autoComplete="on" value={userData.username} onChange={handleInputChange} type="text" name="username" />
            <label htmlFor="password"></label>
            <input autoComplete="on" value={userData.password} onChange={handleInputChange} type="password" name="password" />
            <button>Enviar</button>
        </form>
    )
}