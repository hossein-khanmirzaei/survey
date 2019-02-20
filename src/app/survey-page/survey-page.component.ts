import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Page } from '../page';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css'],
  host: {
    class: 'h-100 w-100'
  }
})
export class SurveyPageComponent implements OnInit {

  surveyType: string;
  currentPage: Page;

  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    this.getSurveyContent();
  }

  getSurveyContent(){
    this.surveyType = this.surveyService.selectedSurveyType;
    //alert(this.surveyType);
  }

}
