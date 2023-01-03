import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { ScrollOut } from 'scroll-out';


@Component({
  selector: 'ab-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements  AfterContentInit, OnDestroy  {
  so: any;

  constructor() { }

  ngAfterContentInit() {
    this.so = ScrollOut({
      // scope: this.el.nativeElement
    });
  }

  ngOnDestroy() {
    this.so.teardown();
  }

}
