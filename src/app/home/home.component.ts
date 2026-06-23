import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';
import {ScrollToDirective} from '../directives/scroll-to.directive';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [NgStyle, ScrollToDirective],
  standalone: true
})
export class HomeComponent {
  opacVal = 1;
  private readonly x = window.matchMedia("(max-width: 1100px)");

  constructor() {
    window.addEventListener('scroll', () => {
      let value;
      if (this.x.matches) {
        value = 2.5 + window.scrollY / -300;
      } else {
        value = 1 + window.scrollY / -420;
      }
      this.opacVal = value;
    })
  }
}
