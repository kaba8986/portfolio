import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import { Scroll } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


@Component({
  selector: 'ab-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('section', {static: true}) section: ElementRef<HTMLDivElement>
  @ViewChild('title', {static: true}) title: ElementRef<HTMLDivElement>
  @ViewChild('firstImage', {static: true}) firstImage: ElementRef<HTMLDivElement>
  @ViewChild('secondImage', {static: true}) secondImage: ElementRef<HTMLDivElement>
  @ViewChild('profile', {static: true}) profile: ElementRef<HTMLDivElement>


  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.initialAnimations();
    this.initScrollAnimations();
  }

  initScrollAnimations(): void {
    gsap.from(this.firstImage.nativeElement, {
      scrollTrigger: {
        trigger: this.firstImage.nativeElement,
        scrub: true,
        start: '-800 center'
      } as ScrollTrigger.Vars,
      duration: 0.1,
      x: -60,
      opacity: 0,
      scale: 0.8
    });
    gsap.from(this.secondImage, {
      x: -20,
      duration: 1.1,
      opacity: 0,
      scale: 0.8
    });
  }

  initialAnimations(): void {
    /*
    gsap.from(this.title.nativeElement, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.5
    })
      */
  }



}
