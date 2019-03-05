import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Survey } from "./survey";
import { SurveyContent } from './survey-content';
import { SurveyAnswer } from './survey-answer';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {

  @ViewChild('imageElement') imageElement: ElementRef<any>;
  @ViewChild('modalElement') modalElement: ElementRef<any>;

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
    this.surveyAnswer = new SurveyAnswer(null, null, null, null, null, null, null, [], 50);
  }

  getCurrentSurveyContent(): Survey {
    return SurveyContent.find(s => s.surveyId === this.surveyAnswer.selectedSurveyType);
  }

  getSurveyContent(surveyId: string): Survey {
    return SurveyContent.find(s => s.surveyId === surveyId);
  }

  getImageElemet(): ElementRef<any> {
    return this.imageElement;
  }
  
  getModalElemet(): ElementRef<any> {
    return this.modalElement;
  }
}