import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToWebsite(site: string) {
    window.location.href = site;
  }
}
