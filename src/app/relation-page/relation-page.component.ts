import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-relation-page',
  templateUrl: './relation-page.component.html',
  styleUrls: ['./relation-page.component.css'],
  host: {
    class: 'h-100 w-100'
  }
})
export class RelationPageComponent implements OnInit {

  relationCode: number;

  constructor(private router: Router, private surveyService: SurveyService, private toastrService: ToastrService) {
    if (!this.surveyService.surveyAnswer.nationalCode) {
      this.router.navigateByUrl('/Initial');
    }
  }

  ngOnInit() {
    this.getInitialData();
  }

  getInitialData() {
    this.relationCode = this.surveyService.surveyAnswer.relationCode;
  }

  onSubmit(validity: boolean) {
    if (validity) {
      this.surveyService.surveyAnswer.relationCode = this.relationCode;
      this.router.navigateByUrl('/Selection');
    }
    else {
      this.toastrService.error('لطفاً به تمامی سوالات پاسخ دهید.', 'توجه!', {});
    }
  }

}
