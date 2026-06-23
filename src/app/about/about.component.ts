
import { Component, ElementRef, OnInit, ViewChild, DOCUMENT } from '@angular/core';





@Component({
    selector: 'ab-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: false
})
export class AboutComponent implements OnInit {
  @ViewChild('section', {static: true}) section: ElementRef<HTMLDivElement>



  constructor() { }

  ngOnInit(): void {

  }





}
