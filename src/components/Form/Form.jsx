import { useState } from "react";
import styles from './Form.module.css';
import validation from './validation.js';

export default function Form(props) {
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
        setErrors(
            validation({
                ...userData,
                [name]:value
            })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <label htmlFor="username">Username: </label>
            <input autoComplete="on" value={userData.username} onChange={handleInputChange} type="text" name="username" />
            <p className={styles.error}>{errors.username && errors.username}</p>
            <br />
            <label htmlFor="password">Password: </label>
            <input autoComplete="on" value={userData.password} onChange={handleInputChange} type="password" name="password" />
            <p className={styles.error}>{errors.password}</p>
            <hr />
            <button>Enviar</button>
        </form>
    )
}