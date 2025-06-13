import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  name:string = "Omnya Abdelnaem";
  jobTitle:string = "Software Engineer";

  scrollToFooter() {
    const footer = document.querySelector(".footer");
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
