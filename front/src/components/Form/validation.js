export default function validation(input) {
    const errors = {};
    const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regExPassword = /^(?=.*\d)(?=.*[a-zA-Z]).{5,12}$/;

    if (input.email) {
        if (input.email.length > 35) errors.email = '❌ Must be less than 35 characters';
        if (!regExEmail.test(input.email)) errors.email = '❌ Invalid email';
    }

    if (input.password) {
        if (!regExPassword.test(input.password)) errors.password = '❌ Must contain 5-12 characters, one number and one letter';
    }

    return errors;
}