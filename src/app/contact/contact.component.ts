import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  url = '../../assets/img/to-top.png';
  name = '';
  email = '';
  message = '';


  constructor() {

   }

  ngOnInit(): void {
  }



  onMouseEnter() {
    this.url = '../../assets/img/to-top-hover.png'
  }

  onMouseOut() {
    this.url = '../../assets/img/to-top.png'
  }

}
