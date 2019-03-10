import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import * as $ from 'JQuery';
import { ToastrService } from 'ngx-toastr';

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
  directCommentAnswer: string;

  constructor(private router: Router, private surveyService: SurveyService, private toastrService: ToastrService) {
    if (!this.surveyService.surveyAnswer.nationalCode) {
      this.router.navigateByUrl('/Initial');
    }
  }

  ngOnInit() {
    this.getInitialData();
  }

  getInitialData() {
    this.directCommentChoice = this.surveyService.surveyAnswer.directCommentChoice;
    this.directCommentAnswer = this.surveyService.surveyAnswer.directCommentAnswer;
  }

  onSubmit(validity: boolean) {
    if (validity) {
      this.surveyService.surveyAnswer.directCommentChoice = this.directCommentChoice;
      this.surveyService.surveyAnswer.directCommentAnswer = this.directCommentAnswer;
      this.router.navigateByUrl('/Last');
    }
    else {
      this.toastrService.error('لطفاً به تمامی سوالات پاسخ دهید.', 'توجه!', {});
    }
  }

}
