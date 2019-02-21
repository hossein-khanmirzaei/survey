import { Injectable } from '@angular/core';
import { Survey } from "./survey";
import { SurveyContent } from './survey-content';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  selectedSurveyType: string;

  constructor() { }

  
  getCurrentSurveyContent(): Survey {
    return SurveyContent.find(s => s.surveyId === this.selectedSurveyType);
  }
  getSurveyContent(surveyId: string): Survey {
    return SurveyContent.find(s => s.surveyId === surveyId);
  }

}