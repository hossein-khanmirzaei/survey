import { Component, OnInit, Renderer2 } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private router: Router, private rd: Renderer2, private surveyService: SurveyService, private toastrService: ToastrService) {
    if (!this.surveyService.surveyAnswer.nationalCode) {
      this.router.navigateByUrl('/Initial');
    }
  }

  ngOnInit() {
    this.getInitialData();
    this.onSurveyTypeChanged(this.selectedSurveyType);
  }

  getInitialData() {
    this.relationCode = this.surveyService.surveyAnswer.relationCode;
    this.selectedSurveyType = this.surveyService.surveyAnswer.selectedSurveyType;
    if (this.relationCode == 1 || this.relationCode == 2) {
      this.isDirectCommentDisable = null;
      this.isProfessorsResidenceDisabled = null;
      this.isStudentsResidenceDisabled = true;
      this.isCateringFacilitiesDisabled = null;
      this.isEducationalFacilitiesDisabled = null;
    }
    else if (this.relationCode == 3 || this.relationCode == 4) {
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
      this.toastrService.error('لطفاً به تمامی سوالات پاسخ دهید.', 'توجه!', {});
    }
  }

  onSurveyTypeChanged(val: string) {
    this.surveyService.surveyAnswer.selectedSurveyType = val;
    switch (val) {
      case 'DirectComment': {
        this.nextPageLink = "/DirectComment";
        //this.rd.setAttribute(this.surveyService.imageElement.nativeElement, "src", "./assets/img/banner1.png");
        break;
      }
      case 'ProfessorsResidence': {
        this.nextPageLink = "/Survey/Page/1";
        //this.rd.setAttribute(this.surveyService.imageElement.nativeElement, "src", "./assets/img/banner2.png");
        break;
      }
      case 'StudentsResidence': {
        this.nextPageLink = "/Survey/Page/1";
        //this.rd.setAttribute(this.surveyService.imageElement.nativeElement, "src", "./assets/img/banner3.png");
        break;
      }
      case 'CateringFacilities': {
        this.nextPageLink = "/Survey/Page/1";
        //this.rd.setAttribute(this.surveyService.imageElement.nativeElement, "src", "./assets/img/banner1.png");
        break;
      }
      case 'EducationalFacilities': {
        this.nextPageLink = "/Survey/Page/1";
        //this.rd.setAttribute(this.surveyService.imageElement.nativeElement, "src", "./assets/img/banner3.png");
        break;
      }
      default: {
        this.nextPageLink = "/Initial";
        break;
      }
    }
  }
}
