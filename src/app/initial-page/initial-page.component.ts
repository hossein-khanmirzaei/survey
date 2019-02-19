import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css'],
  host: {
    class: 'h-100 w-100'
  }
})
export class InitialPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
