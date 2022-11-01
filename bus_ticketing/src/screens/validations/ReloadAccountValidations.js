var errors = {};

const cardNumberPattern = /^[0-9]{16}$/;
const cardExpiryPattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
const cardCvcPattern = /^[0-9]{3,4}$/;

export const cardValidation = (values) => {
    errors = {};

    if (!values.cardNumber) {
        errors.cardNumber = 'Card Number is required';
    } else if (!cardNumberPattern.test(values.cardNumber)) {
        errors.cardNumber = 'Invalid card number';
    }

    if (!values.expiry) {
        errors.cardExpiry = 'Expiry is required';
    } else if (!cardExpiryPattern.test(values.expiry)) {
        errors.cardExpiry = 'Invalid expiry (MM/YY)';
    }

    if (!values.cvc) {
        errors.cvc = 'CVC is required';
    } else if (!cardCvcPattern.test(values.cvc)) {
        errors.cvc = 'Invalid CVC';
    }

    return errors;
};
