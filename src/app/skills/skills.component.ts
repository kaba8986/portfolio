import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  icons = ['Angular', 'Typescript', 'Javascript', 'HTML', 'Firebase', 'GIT', 'CSS', 'Rest-Api', 'Scrum', 'Material design'];

  constructor() { }

  ngOnInit(): void {
  }

}
