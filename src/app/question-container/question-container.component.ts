import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.css']
})
export class QuestionContainerComponent implements OnInit {

  @Input() page: Page;

  constructor() { }

  ngOnInit() {
  }

}
