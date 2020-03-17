import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  addClass(event){
    var x, i;
    x = document.querySelectorAll("li");
    console.log(x);
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
    event.target.classList.toggle("active");
  }

}
