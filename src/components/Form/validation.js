export default function validation (input) {
    const errors = {};
    const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const regExPassword = /?=.*[0-9]/;

    if (input.username.length === 0) errors.username = 'Completa este campo';
    if (input.username.length > 35) errors.username = 'Debe ser menor a 35 caracteres';
    if (!regExEmail.test(input.username)) errors.username = 'Invalido email';

    if (input.password.length > 6 || input.password.length < 10) errors.password = 'Debe tener entre 6 y 10 caracteres';
    // if (!regExPassword.test(input.password)) errors.password = 'Invalido email';
    
    return errors;
}