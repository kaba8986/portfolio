import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import AOS, {AosOptions} from 'aos';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AOS_CONFIG} from "./const/aos-config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  standalone: true,
})

export class AppComponent implements OnInit {
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.initializeAOS();
  }

  showHeaderOrFooter(): boolean {
    return this.router.url !== '/start'
  }

  private initializeAOS(): void {
    AOS.init(AOS_CONFIG as AosOptions);
  }
}
