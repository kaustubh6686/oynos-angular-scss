import { Component, OnInit } from '@angular/core';
import { DomElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this._initNavigation();
  }

  _initNavigation() {
    let lis = document.querySelectorAll('li');
    lis.forEach( li => {
      li.addEventListener('click', (event) => {
        lis.forEach(li => {
          li.classList.remove("active");
        });
        let currentLi:any = event.currentTarget;
        currentLi.classList.add("active")
      });
    });
  }



}
