import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';





@Component({
  selector: 'ab-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('section', {static: true}) section: ElementRef<HTMLDivElement>



  constructor() { }

  ngOnInit(): void {

  }





}
