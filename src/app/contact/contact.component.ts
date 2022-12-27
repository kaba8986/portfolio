import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

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

  name_validity = 'alert';
  email_validity = 'alert';
  message_validity = 'alert';

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
