import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testTask';
  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
  }
  activateCard(event: any): void {
    const elem = event.target.parentNode.parentNode;
    elem.classList.toggle('active')
  }
}
