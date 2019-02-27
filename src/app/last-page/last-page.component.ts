import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.css'],
  host: {
    class: 'h-100 w-100'
  }
})
export class LastPageComponent implements OnInit {

  constructor(private router: Router, private surveyService: SurveyService) {
    if (!this.surveyService.surveyAnswer.nationalCode) {
      this.router.navigateByUrl('/Initial');
    }
  }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.surveyService); }
}
