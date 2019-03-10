import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Survey } from "./survey";
import { SurveyContent } from './survey-content';
import { SurveyAnswer } from './survey-answer';
import { UserIdleService } from 'angular-user-idle';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {

  @ViewChild('imageElement') imageElement: ElementRef<any>;

  surveyAnswer: SurveyAnswer;
  modalMessage: string = 'لطفاً به تمامی سوالات پاسخ دهید.';

  constructor(private router: Router, private userIdle: UserIdleService, private toastrService: ToastrService) {
    this.surveyAnswer = new SurveyAnswer(null, null, null, null, null, null, null, [], 50);
    this.userIdle.onTimerStart().subscribe(
      (count) => {
        if (count == 1)
          this.toastrService.error('بازگشت به صفحه نخست...', 'توجه!', {            
            progressBar: true,
            positionClass: 'toast-top-center',
            timeOut: 9000
          }).toastId = 1001;
      }
    );
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
    this.toastrService.clear(1001);
  }

}