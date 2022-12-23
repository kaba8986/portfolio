import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  marker: string = 'home';

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(anchor: string) {
    this.marker = anchor;
    console.log(this.marker);
  }

}
