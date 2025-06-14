import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  portfolioItems = [
    'Web Design',
    'Responsive Design',
    'Mobile Design',
    'UI/UX Design',
    'Flutter App',
    'Cloud Computing'
  ];
}
