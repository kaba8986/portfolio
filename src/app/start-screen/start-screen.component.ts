import {Component} from '@angular/core';

@Component({
  selector: 'ab-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
  standalone: true
})
export class StartScreenComponent {

  goToWebsite(site: string) {
    window.location.href = site;
  }
}
