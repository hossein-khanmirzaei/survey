import { Component, OnInit, Input } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Page } from '../page';
import { Question } from '../question';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private surveyService: SurveyService) {
    if (!this.surveyService.surveyAnswer.nationalCode) {
      this.router.navigateByUrl('/Initial');
    }
  }

  ngOnInit() {
    //this.page = this.surveyService.getCurrentSurveyContent().pages[0];
  }

}
