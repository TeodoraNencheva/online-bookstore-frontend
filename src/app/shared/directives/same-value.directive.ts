import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appSameValue]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: SameValueDirective,
            multi: true
        }
    ]
})
export class SameValueDirective implements Validator {
    @Input() appSameValue: HTMLInputElement | undefined;

    constructor() { }

    validate(control: AbstractControl): ValidationErrors | null {

        let result = sameValueValidateFactory(control, this.appSameValue)();

        if (control instanceof FormGroup && control.controls['confirmPassword']) {
            control.controls['confirmPassword'].updateValueAndValidity({ onlySelf: true });
        }

        return result;
    }

    registerOnValidatorChange?(fn: () => void): void { }

}

function sameValueValidateFactory(
    control: AbstractControl,
    appSameValue: HTMLInputElement | undefined
) {
    return function sameValueValidate() {

        if (control && control instanceof FormGroup) {
            let isValid = false;

            if (control.controls['password'] && control.controls['confirmPassword']) {
                isValid = control.controls['password'].value == control.controls['confirmPassword'].value;
            }


            if (isValid) {
                return null;
            } else {
                return { 'passwordCheck': 'failed' }
            }
        } else {
            if (control.value == appSameValue!.value) {
                return null;
            }

            return { 'passwordCheck': 'failed' }
        }
    }
};
