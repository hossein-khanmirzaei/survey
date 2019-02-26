import { Component, OnInit, Input } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Page } from '../page';
import { Question } from '../question';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.css'],
  host: {
    class: 'h-100 w-100'
  }
})
export class QuestionContainerComponent implements OnInit {

  @Input() page: Page;
  //currentQuestion: Question;

  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    //this.page = this.surveyService.getCurrentSurveyContent().pages[0];
  }

}
