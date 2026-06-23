import {Component, input} from '@angular/core';
import {Project} from 'src/models/project.class';

@Component({
  selector: 'ab-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: true
})
export class ProjectComponent {
  readonly reverse = input<boolean>(false);
  readonly currProject = input<Project>(new Project());

  goToLive(project: Project) {
    window.open(project.live, '_blank')
  }

  goToGitHub(project: Project) {
    window.open(project.github, '_blank')
  }
}
