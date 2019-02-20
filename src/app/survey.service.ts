import { Injectable } from '@angular/core';
import { Survey } from "./survey";
import { SurveyContent } from './survey-content';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  selectedSurveyType: string;

  constructor() { }

  getSurveyContent(surveyId: string): Survey {
    switch (surveyId) {
      case 'ProfessorsResidence': {
        return SurveyContent.find(s => s.surveyId === 'ProfessorsResidence');
      }
      case 'StudentsResidence': {
        return SurveyContent.find(s => s.surveyId === 'StudentsResidence');
      }
      case 'CateringFacilities': {
        return SurveyContent.find(s => s.surveyId === 'CateringFacilities');
        break;
      }
      case 'EducationalFacilities': {
        return SurveyContent.find(s => s.surveyId === 'EducationalFacilities');
        break;
      }
      default: {
        return new Survey();
      }
    }
  }
}