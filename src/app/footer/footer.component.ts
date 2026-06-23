import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'ab-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [RouterLink],
  standalone: true
})
export class FooterComponent  {
  readonly githubLink = 'https://github.com/kaba8986';
  readonly linkedinLink = 'https://www.linkedin.com/in/andreas-burghardt-743563260/';
  readonly xingLink = 'https://www.xing.com/profile/Andreas_Burghardt21';
  readonly copyRight = '© 2023 Andreas Burghardt';
}
