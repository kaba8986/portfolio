import {Component, HostListener} from '@angular/core';
import {ScrollToDirective} from '../directives/scroll-to.directive';

@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [ScrollToDirective],
  standalone: true,
})
export class HeaderComponent {
  private open = false;

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    if (this.open && window.innerWidth > 720) this.toggleMenu();
  }

  toggleMenu(): void {
    let icons = document.querySelectorAll('.menu-icon');
    icons.forEach((icon) => icon.classList.toggle('open'));
    document.querySelector('.mobile-menu').classList.toggle('move');
    this.open = !this.open;
  }
}
