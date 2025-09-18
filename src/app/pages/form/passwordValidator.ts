import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;

  if (!value) {
    return null; 
  }

  const hasUpperCase = /[A-Z]+/.test(value);
  const hasLowerCase = /[a-z]+/.test(value);
  const hasNumber = /[0-9]+/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]+/.test(value);
  const isLengthValid = value.length >= 8;

  const isValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isLengthValid;

   return isValid ? null : { 'passwordValidator': true };
};