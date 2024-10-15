import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Project } from 'src/models/project.class';

@Component({
  selector: 'ab-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input() reverse: boolean = false; //get boolean from portfolio component
  @Input() currProject = new Project(); //get current Project from portfolio component


   goToLive(project: Project){
    window.open(project.live, '_blank')
   }

   goToGitHub(project: Project){
    window.open(project.github, '_blank')
   }

}
