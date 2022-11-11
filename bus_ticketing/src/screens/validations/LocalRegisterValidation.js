// email validation pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
// can only contain letters and spaces
const letterPattern = /^[a-zA-Z ]*$/;
// nic validation pattern
const nicPattern = /^[0-9]{9}[vVxX]$/;

var errors = {};

export const LocalRegisterValidation = (values) => {
    errors = {};

    if (!values.name) {
        errors.name = 'Name is required';
    } else if (!letterPattern.test(values.name)) {
        errors.name = 'Name can only contain letters and spaces';
    }

    if (!values.nic) {
        errors.nic = 'NIC is required';
    } else if (!nicPattern.test(values.nic)) {
        errors.nic = 'Invalid NIC';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!emailPattern.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    }

    return errors;
};
