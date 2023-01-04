import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opacVal = 1;
  

  constructor() { 
    window.addEventListener('scroll' , () => {
      let value = 1 + window.scrollY/ -420;
      this.opacVal = value;
      console.log(this.opacVal);
      
    })
  }

  ngOnInit(): void {
  }

}
