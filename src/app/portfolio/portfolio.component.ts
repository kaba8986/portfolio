import {Component} from '@angular/core';
import ProjectsJson from '../../assets/projects.json';
import {ProjectComponent} from '../project/project.component';

interface PROJECT {
  title: string;
  languages: string;
  description: string;
  live: string;
  github: string;
  image: string;
}

type PortfolioButton = 'all' | 'javascript' | 'angular';

@Component({
  selector: 'ab-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  imports: [ProjectComponent],
  standalone: true,
})
export class PortfolioComponent {
  projects: PROJECT[] = ProjectsJson;
  selectedButton: PortfolioButton = 'all';

  filter(subject: string): void {
    this.resetFilter();
    let filteredProjects = [];
    this.projects.forEach((proj: PROJECT) => {
      if (proj.languages.toLowerCase().includes(subject)) {
        filteredProjects.push(proj);
      }
    })
    this.projects = filteredProjects;
  }

  revertView(index: number): boolean {
    return index % 2 == 1;
  }

  resetFilter(): void {
    this.projects = ProjectsJson;
  }

  setActive(buttonName: PortfolioButton): void {
    this.selectedButton = buttonName;
  }

  isActive(buttonName: PortfolioButton): boolean {
    return this.selectedButton === buttonName;
  }
}
