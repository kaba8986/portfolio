import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opacVal = 1;
  x = window.matchMedia("(max-width: 1100px)");

  constructor() { 
    window.addEventListener('scroll' , () => {
      let value;
      if(this.x.matches) {
        value = 2.5 + window.scrollY/ -300;
      } else {
        value = 1 + window.scrollY/ -420;
      }
      this.opacVal = value;
      console.log(this.opacVal);
    })
  }

  ngOnInit(): void {
  }

}
