import {Directive, HostListener, inject, input, Input} from '@angular/core';
import {Router} from '@angular/router';

@Directive({selector: '[abScrollTo]', standalone: true})
export class ScrollToDirective {
  private readonly router = inject(Router);
  target = input.required<string>();

  @HostListener('click')
  onClick() {
    if (this.router.url !== '/') this.router.navigate(['/']);

    setTimeout(() => {
      const targetElement = document.querySelector(this.target());
      targetElement.scrollIntoView({behavior: 'smooth'});
    }, 100);
  }
}
