import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

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
  relationCode: number;
  nextPageLink: string;
  isDirectCommentDisable: boolean = null;
  isProfessorsResidenceDisabled: boolean = null;
  isStudentsResidenceDisabled: boolean = null;
  isCateringFacilitiesDisabled: boolean = null;
  isEducationalFacilitiesDisabled: boolean = null;
  constructor(private router: Router, private surveyService: SurveyService) { }

  ngOnInit() {
    this.getInitialData();
    this.onSurveyTypeChanged(this.selectedSurveyType);
  }

  getInitialData() {
    this.relationCode = this.surveyService.relationCode;
    this.selectedSurveyType = this.surveyService.selectedSurveyType;
    if(this.relationCode == 1 || this.relationCode == 2){
      this.isDirectCommentDisable = null;
      this.isProfessorsResidenceDisabled = null;
      this.isStudentsResidenceDisabled = true;
      this.isCateringFacilitiesDisabled = null;
      this.isEducationalFacilitiesDisabled = null;      
    }
    else if(this.relationCode == 3 || this.relationCode == 4){
      this.isDirectCommentDisable = null;
      this.isProfessorsResidenceDisabled = true;
      this.isStudentsResidenceDisabled = null;
      this.isCateringFacilitiesDisabled = null;
      this.isEducationalFacilitiesDisabled = null;
    }
  }

  onSubmit(validity: boolean) {
    if (validity) {
      this.router.navigateByUrl('/' + this.nextPageLink);
    }
    else {
      alert("لطفاً اطلاعات فرم را تکمیل نمائید.")
    }
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
