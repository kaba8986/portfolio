import { Component, OnInit } from '@angular/core';
import  ProjectsJson  from '../../assets/projects.json';



interface PROJECT {
  title: string;
  languages: string;
  description: string;
  live: string;
  github: string;
}

@Component({
  selector: 'ab-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  Projects: PROJECT[] = ProjectsJson;

  constructor() {
    console.log(this.Projects);
   }

  ngOnInit(): void {
  }

}
