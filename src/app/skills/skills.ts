import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  focusItems = [
    'UI/UX Design',
    'Web Design',
    'Responsive Design',
    'Mobile Design'
  ];

  skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Typescript',
    'Sass',
    'Figma',
    'React',
    'Angular'
  ];
}
