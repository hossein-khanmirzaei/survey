import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-direct-comment-page',
  templateUrl: './direct-comment-page.component.html',
  styleUrls: ['./direct-comment-page.component.css'],
  host: {
    class: 'h-100 w-100'
  }
})
export class DirectCommentPageComponent implements OnInit {

  directCommentChoice: number;

  constructor(private router: Router, private surveyService: SurveyService) {
    if (!this.surveyService.surveyAnswer.nationalCode) {
      this.router.navigateByUrl('/Initial');
    }
  }

  ngOnInit() {
    this.getInitialData();
  }

  getInitialData() {
    this.directCommentChoice = this.surveyService.surveyAnswer.directCommentChoice;
  }

  onSubmit(validity: boolean) {
    if (validity) {
      this.surveyService.surveyAnswer.directCommentChoice = this.directCommentChoice;
      this.router.navigateByUrl('/Last');
    }
    else {
      alert("لطفاً اطلاعات فرم را تکمیل نمائید.")
    }
  }

}
