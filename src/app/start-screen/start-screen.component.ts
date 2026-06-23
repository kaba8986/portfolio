import {Component} from '@angular/core';

@Component({
  selector: 'ab-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
  standalone: true
})
export class StartScreenComponent {
  readonly devUrl = 'https://www.andreas-burghardt.de';
  readonly musicianUrl = 'https://www.andreasburghardtmusic.com';

  goToWebsite(site: string) {
    window.location.href = site;
  }
}
