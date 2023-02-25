export default function validation (props) {
    const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regExPassword = /?=.*[0-9]/;

    if (props.username.length === 0) errors.username = 'Completa este campo';
    if (props.username.length > 35) errors.username = 'Debe ser menor a 35 caracteres';
    if (!regExEmail.test(props.username)) errors.username = 'Invalido email';

    if (props.password.length > 6 && props.password.length < 10) errors.password = 'Debe tener entre 6 y 10 caracteres';
    if (!regExPassword.test(props.password)) errors.password = 'Invalido email';
}