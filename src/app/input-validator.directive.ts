import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[abInputValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: InputValidatorDirective,
    multi: true
  }]
})


export class InputValidatorDirective implements Validator {

  validate(control: AbstractControl) : {[key: string]: any} | null {
    if(control.value == '') {
      return {'inputInvalid': true};
    }
    return null;
  }

}
