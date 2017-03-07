export const required = value => value ? undefined : 'Required';

export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength50 = maxLength(50);
export const maxLength200 = maxLength(200);

export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength3 = minLength(3);

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
export const minValue3 = minValue(3);

export const aucEmail = value =>
    value && !/^[A-Z0-9._%+-]+$/i.test(value) ? 'Invalid email address' : undefined;

export const mobileNumber = number =>
    number && !/^\+?1?\d{9,11}$/i.test(number) ? 'Mobile number must be 9 to 11 digits long' : undefined;

