import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/models/project.class';

@Component({
  selector: 'ab-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() reverse: boolean = false; //get boolean from portfolio component
  @Input() currProject = new Project(); //get current Project from portfolio component

  constructor() {
   }


  ngOnInit(): void {
  }

}
