import {Component} from '@angular/core';
import {ScrollToDirective} from '../directives/scroll-to.directive';

@Component({
  selector: 'ab-home-greeting',
  templateUrl: './home-greeting.component.html',
  styleUrls: ['./home-greeting.component.scss'],
  imports: [ScrollToDirective],
  standalone: true
})
export class HomeGreetingComponent {
}
