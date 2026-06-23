import {Component} from '@angular/core';
import {LucideLightbulb, LucidePuzzle} from "@lucide/angular";

@Component({
  selector: 'ab-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [
    LucideLightbulb,
    LucidePuzzle
  ],
  standalone: true
})
export class AboutComponent {}
