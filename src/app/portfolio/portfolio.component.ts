import { Component, OnInit } from '@angular/core';
import  ProjectsJson  from '../../assets/projects.json';

interface PROJECT {
  title: string;
  languages: string;
  description: string;
  live: string;
  github: string;
  image: string;
}

@Component({
  selector: 'ab-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: PROJECT[] = ProjectsJson;
  activeBtn: string = 'btn1';

  constructor() {

   }

  ngOnInit(): void {

  }

  filter(subject) {
    this.resetFilter();
    let filteredProjects = [];
    this.projects.forEach((proj) => {
      if(proj.languages.toLowerCase().includes(subject)) {
        filteredProjects.push(proj);
      }
    })
    this.projects = filteredProjects;
  }

  resetFilter() {
    this.projects = ProjectsJson;
  }

  setActive(btn) {
    this.activeBtn = btn;
  }

  isActive(btn) {
    return this.activeBtn == btn;
  }

}
