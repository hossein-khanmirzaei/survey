import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Survey } from "./survey";
import { SurveyContent } from './survey-content';
import { SurveyAnswer } from './survey-answer';
import { UserIdleService } from 'angular-user-idle';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {

  @ViewChild('imageElement') imageElement: ElementRef<any>;

  surveyAnswer: SurveyAnswer;
  modalMessage: string = 'لطفاً به تمامی سوالات پاسخ دهید.';

  constructor(private router: Router, private userIdle: UserIdleService) {
    this.surveyAnswer = new SurveyAnswer(null, null, null, null, null, null, null, [], 50);
    this.userIdle.onTimerStart().subscribe();
    this.userIdle.onTimeout().subscribe(() => { this.restartTimer(); this.router.navigateByUrl('/Initial') });
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