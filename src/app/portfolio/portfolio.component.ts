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



  constructor() {
    console.log(this.projects);
   }

  ngOnInit(): void {
  }

  filter(subject) {
    console.log(subject);
    let filteredProjects = this.projects.filter((proj) => {
    proj.languages.indexOf(subject) > -1;
   })
   this.projects = filteredProjects;

  }

  resetFilter() {
    this.projects = ProjectsJson;
 


  }

}
