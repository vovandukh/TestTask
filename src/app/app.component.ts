import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testTask';
  public name: string = '';
  public phone: string = '';
  public email: string = '';
  public customOptions: OwlOptions = {
    autoHeight: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      100: {
        items: 1
      }
    },
    nav: true
  }
  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
  }
  activateCard(event: any): void {
    const elem = event.target.parentNode.parentNode;
    elem.classList.toggle('active')
  }

  changeForm(): void {
    const regExp = /^\S+@\S+\.\S+$/
    const regExpName = /^[а-яА-Яa-zA-Z]+$/
    const regExpPhone = /^[0-9]{12}$/
    if (this.email != '') {
      regExp.test(this.email) === false ? alert('Неверний email') : '';
    } else if (this.name != '') {
      regExpName.test(this.name) == false ? alert('Неверное имя') : '';
    } else if (this.phone != '') {
      regExpPhone.test(this.phone) == false ? alert('Неверний телефон') : '';
    }
  }

}
