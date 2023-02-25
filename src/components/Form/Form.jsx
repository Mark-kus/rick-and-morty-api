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

    const handleSubmit = () => {
        props.login(userData);
    }

    return (
        <form>
            <label htmlFor="username"></label>
            <input value={userData.username} onChange={handleInputChange} type="text" name="username" />
            <label htmlFor="password"></label>
            <input value={userData.password} onChange={handleInputChange} type="password" name="password" />
            <button></button>
        </form>
    )
}