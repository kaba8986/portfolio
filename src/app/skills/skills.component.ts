import {Component} from '@angular/core';
import {SKILLS_IMAGE_NAMES} from "../const/skills-image-names";
import {ScrollToDirective} from "../directives/scroll-to.directive";

@Component({
  selector: 'ab-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  imports: [
    ScrollToDirective
  ],
  standalone: true
})
export class SkillsComponent {
  readonly icons = SKILLS_IMAGE_NAMES;
}
