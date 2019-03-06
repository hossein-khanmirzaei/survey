import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Survey } from "./survey";
import { SurveyContent } from './survey-content';
import { SurveyAnswer } from './survey-answer';
import { UserIdleService } from 'angular-user-idle';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {

  @ViewChild('imageElement') imageElement: ElementRef<any>;

  surveyAnswer: SurveyAnswer;

  /*  
    nationalCode: string = "";
    age: number = null;
    gender: Gender;
    relationCode: number = null;
    directCommentChoice: number = null;
    selectedSurveyType: string;
  */

  constructor(private userIdle: UserIdleService) {
    this.surveyAnswer = new SurveyAnswer(null, null, null, null, null, null, null, [], 50);
//    this.userIdle.startWatching();
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    this.userIdle.onTimeout().subscribe(() => console.log('Time is up!'));
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

  stopWatchingTimer() {
    this.userIdle.stopWatching();
  }

  startWatchingTimer() {
    this.userIdle.startWatching();
  }

  restartTimer() {
    this.userIdle.resetTimer();
  }

}