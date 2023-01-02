import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  icons = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'Firebase', 'GIT', 'CSS', 'REST-API', 'Scrum', 'Material Design'];

  constructor() { }

  ngOnInit(): void {
  }

}
