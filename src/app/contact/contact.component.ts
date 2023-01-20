import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

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

  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('emailField') emailField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;

  constructor(public router: Router) {

   }

  ngOnInit(): void {
  }

  onMouseEnter() {
    this.url = '../../assets/img/to-top-hover.png'
  }

  onMouseOut() {
    this.url = '../../assets/img/to-top.png'
  }

  async sendMail() {
      //"https://andreas-burghardt.developerakademie.net/send_mail/send_mail.php"
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    //noch sende-Animation triggern

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    //send
    await fetch("https://andreas-burghardt.de/send_mail/send_mail.php",
    {
      method: 'POST',
      body: fd
    })
 

    this.router.navigate(['/success']);

    //Text noch anzeigen - Nachricht gesendet o ä

    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;


  }

}
