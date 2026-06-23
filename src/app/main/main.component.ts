import {Component, OnInit} from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {SkillsComponent} from '../skills/skills.component';
import {PortfolioComponent} from '../portfolio/portfolio.component';
import {ContactComponent} from '../contact/contact.component';


@Component({
  selector: 'ab-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [HomeComponent, AboutComponent, SkillsComponent, PortfolioComponent, ContactComponent],
  standalone: true,
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
