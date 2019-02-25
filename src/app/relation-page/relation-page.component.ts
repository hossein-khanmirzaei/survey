import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';

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

  constructor(private router: Router, private surveyService: SurveyService) { }

  ngOnInit() {
    this.getInitialData();
  }

  getInitialData() {
    this.relationCode = this.surveyService.relationCode;
  }

  onSubmit(validity: boolean) {
    if (validity) {
      this.surveyService.relationCode = this.relationCode;
      this.router.navigateByUrl('/Selection');
    }
    else {
      alert("لطفاً اطلاعات فرم را تکمیل نمائید.")
    }
  }

}
