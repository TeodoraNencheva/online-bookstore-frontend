import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNotEmptyValue]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NotEmptyValueDirective,
      multi: true
    }
  ]
})
export class NotEmptyValueDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (control.value != '') {
      return null;
    }

    return { 'valueChecked': 'failed' };
  }

  registerOnValidatorChange?(fn: () => void): void { }

}
