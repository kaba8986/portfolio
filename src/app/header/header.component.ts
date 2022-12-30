import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  marker: string = 'home';
  open: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(this.open && window.innerWidth > 720) {
      this.toggleMenu();
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(anchor: string) {
    this.marker = anchor;
    console.log(this.marker);
  }

  toggleMenu() {
    let icons = document.querySelectorAll('.menu-icon');
    icons.forEach((icon) => {
      icon.classList.toggle('open');
    })
    document.querySelector('.mobile-menu').classList.toggle('move');
    !this.open ? this.open = true : this.open = false;
  }

}
