import { Injectable } from '@angular/core';
import { Survey } from "./survey";
import { SurveyContent } from './survey-content';
import { Gender } from './gender.enum';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  nationalCode: string = "";
  age: number = null;
  gender: Gender;
  relationCode: number = null;
  directCommentChoice: number = null;

  selectedSurveyType: string;

  constructor() { }

  
  getCurrentSurveyContent(): Survey {
    return SurveyContent.find(s => s.surveyId === this.selectedSurveyType);
  }
  getSurveyContent(surveyId: string): Survey {
    return SurveyContent.find(s => s.surveyId === surveyId);
  }

}