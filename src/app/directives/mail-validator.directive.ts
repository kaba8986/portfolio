import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[abMailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MailValidatorDirective,
    multi: true
  }],
  standalone: true
})
export class MailValidatorDirective {

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (control.value == '' || control.value != "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") {
      return {'inputInvalid': true};
    }
    return null;
  }

}
