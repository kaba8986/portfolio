import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('nav', {static: true}) nav: ElementRef<HTMLDivElement>

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
    this.initialAnimations();
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

  initialAnimations(): void {
    
    gsap.from(this.nav.nativeElement.childNodes, {
      duration: 0.5,
      opacity: 0.5,
      y: -20,
      stagger: 0.2,
      delay: 0.3
    })
      
  }

}
