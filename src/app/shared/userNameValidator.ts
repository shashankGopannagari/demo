import { AbstractControl, Validator, ValidatorFn } from "@angular/forms";

// export function  userNameValidator(control: AbstractControl): {[key: string]: any} | null {
//     const nameNotAllowed = /admin/.test(control.value) || /password/.test(control.value);
//     return nameNotAllowed ? {'nameNotAllowed': {value: control.value}} : null
// }

export function userNameValidator(notAllowedString: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null  => {
        const nameNotAllowed = notAllowedString.test(control.value);
        return nameNotAllowed ? {'nameNotAllowed': {value: control.value}} : null
    }
}