import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[abInputValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: InputValidatorDirective,
    multi: true
  }],
  standalone: true
})

export class InputValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    if (control.value == '') return {'inputInvalid': true};
    return null;
  }
}
