import {Component, OnInit, Input, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  currentSelection = 'home';
  constructor(
  ) { }
  ngOnInit():void { }

  @HostListener('scroll') onContainerScroll(e: Event): void {
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
      let sectionTop = section.offsetTop;
      if (this.getYPosition(e) >= sectionTop) {
        this.currentSelection = section.id;
      }

    })
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop + 8;
  }
}
