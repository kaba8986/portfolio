import { Directive, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';



@Directive({
  selector: '[abScrollTo]'
})
export class ScrollToDirective {
  @Input() target = '';
  @HostListener('click')
  onClick() {
    if(this.router.url !== '/') {
      this.router.navigate(['/']);
      console.log(this.router.navigate(['/']));
    }
    
    const targetElement = document.querySelector(this.target);
    console.log(targetElement);
    targetElement.scrollIntoView({behavior: 'smooth'});
  }

  constructor(public router: Router) { 

  }

}
