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
    }

   setTimeout(() => {
    const targetElement = document.querySelector(this.target);
    targetElement.scrollIntoView({behavior: 'smooth'});
   }, 100);
    

  }

  constructor(public router: Router) { 

  }

}
