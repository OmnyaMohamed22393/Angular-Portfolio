import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  aboutMe:string = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur id omnis tempora et sed, vitae porro
          totam accusamus esse assumenda qui corporis corrupti consequatur dolorem inventore? Enim culpa quae laborum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur id omnis tempora et sed, vitae porro
          totam accusamus esse assumenda qui corporis corrupti consequatur dolorem inventore? Enim culpa quae laborum.`;

  downloadCV() {
    const filePath = 'OmnyaAbdelnaem_CV_Software Engineer.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'OmnyaAbdelnaem_CV_Software Engineer.pdf';
    link.click();
  }
}
