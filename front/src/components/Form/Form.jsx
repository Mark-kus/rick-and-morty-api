import { useState } from "react";
import styles from './Form.module.css';
import validation from './validation.js';

export default function Form(props) {
    const [userData, setUserData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });

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

            <strong>Log In</strong>

            <label htmlFor="email">Email</label>
            <input placeholder="you@example.com" autoComplete="off" id="email" value={userData.email} onChange={handleInputChange} type="text" name="email" />
            <p className={styles.error}>{errors.email}</p>
            <br />

            <label htmlFor="password">Password</label>
            <input placeholder="Enter 6 to 10 characters" autoComplete="off" id="password" value={userData.password} onChange={handleInputChange} type="password" name="password" />
            <p className={styles.error}>{errors.password}</p>

            <button type="submit">Enviar</button>
        </form>
    )
}