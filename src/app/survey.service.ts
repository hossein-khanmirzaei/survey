import { Injectable } from '@angular/core';
import { Survey } from "./survey";
import { SurveyContent } from './survey-content';
import { Gender } from './gender.enum';
import { SurveyAnswer } from './survey-answer';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  surveyAnswer: SurveyAnswer;
/*  
  nationalCode: string = "";
  age: number = null;
  gender: Gender;
  relationCode: number = null;
  directCommentChoice: number = null;
  selectedSurveyType: string;
*/

  constructor() {
    this.surveyAnswer = new SurveyAnswer(null, null, null, null, null, null, []);
  }

  getCurrentSurveyContent(): Survey {
    return SurveyContent.find(s => s.surveyId === this.surveyAnswer.selectedSurveyType);
  }
  
  getSurveyContent(surveyId: string): Survey {
    return SurveyContent.find(s => s.surveyId === surveyId);
  }
}