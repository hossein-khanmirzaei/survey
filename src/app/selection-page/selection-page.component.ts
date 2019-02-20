import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-selection-page',
  templateUrl: './selection-page.component.html',
  styleUrls: ['./selection-page.component.css'],
  host: {
    class: 'h-100 w-100'
  }
})
export class SelectionPageComponent implements OnInit {

  selectedSurveyType: string;
  nextPageLink: string;
  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    this.selectedSurveyType = this.surveyService.selectedSurveyType;
    this.onSurveyTypeChanged(this.selectedSurveyType);
  }

  onSurveyTypeChanged(val: string) {
    this.surveyService.selectedSurveyType = val;
    switch (val) {
      case 'DirectComment': {
        this.nextPageLink = "/DirectComment";        
        break;
      }
      case 'ProfessorsResidence': {
        this.nextPageLink = "/Survey/Page/1";
        break;
      }
      case 'StudentsResidence': {
        this.nextPageLink = "/Survey/Page/1";
        break;
      }
      case 'CateringFacilities': {
        this.nextPageLink = "/Survey/Page/1";
        break;
      }
      case 'EducationalFacilities': {
        this.nextPageLink = "/Survey/Page/1";
        break;
      }
      default: {
        this.nextPageLink = "/Initial";
        break;
      }
    }
  }
}
