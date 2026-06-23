import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'ab-mail-sent',
  templateUrl: './mail-sent.component.html',
  styleUrls: ['./mail-sent.component.scss'],
  imports: [RouterLink],
  standalone: true
})
export class MailSentComponent {
}
