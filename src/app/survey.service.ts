import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Survey } from "./survey";
import { SurveyContent } from './survey-content';
import { SurveyAnswer, ISurveyData } from './survey-answer';
import { UserIdleService } from 'angular-user-idle';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';
import { Gender } from './gender.enum';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {

  @ViewChild('imageElement') imageElement: ElementRef<any>;

  surveyAnswer: SurveyAnswer;
  modalMessage: string = 'لطفاً به تمامی سوالات پاسخ دهید.';

  constructor(private router: Router, private userIdle: UserIdleService, private toastrService: ToastrService, private auth: AuthService) {
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
    this.userIdle.onTimeout().subscribe(
      () => {
        this.restartTimer();
        this.surveyAnswer = new SurveyAnswer(null, null, null, null, null, null, null, [], 50);
        this.router.navigateByUrl('/Initial')
      }
    );
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

  sendSurveyData() {
    let selectedSurveyType: number;
    switch (this.surveyAnswer.selectedSurveyType) {
      case 'DirectComment': {
        selectedSurveyType = 1;
        break;
      }
      case 'ProfessorsResidence': {
        selectedSurveyType = 2;
        break;
      }
      case 'StudentsResidence': {
        selectedSurveyType = 3;
        break;
      }
      case 'CateringFacilities': {
        selectedSurveyType = 4;
        break;
      }
      case 'EducationalFacilities': {
        selectedSurveyType = 5;
        break;
      }
      default: {
        selectedSurveyType = 0;
        break;
      }
    }

    // let dataToBeSent = {
    //   'National_Code': this.surveyAnswer.nationalCode,
    //   'Gender': this.surveyAnswer.gender == Gender.female ? 1 : 2,
    //   'Age': this.surveyAnswer.age,
    //   'Relation_Code': this.surveyAnswer.relationCode,
    //   'Selection_Code': selectedSurveyType,
    //   'Message_For': this.surveyAnswer.directCommentChoice,
    //   'Message': this.surveyAnswer.directCommentAnswer,      
    // }

    var dataToBeSent: ISurveyData = {
      National_Code: this.surveyAnswer.nationalCode,
      Gender: this.surveyAnswer.gender == Gender.female ? 1 : 2,
      Age: this.surveyAnswer.age,
      Relation_Code: this.surveyAnswer.relationCode,
      Selection_Code: selectedSurveyType,
      Message_For: this.surveyAnswer.directCommentChoice,
      Message: this.surveyAnswer.directCommentAnswer,
    }
    this.surveyAnswer.ratingAnswers.forEach(element => {
      dataToBeSent[element.questionCode] = element.answerCode;
    });
    console.log(JSON.stringify(dataToBeSent));
    this.auth.add(dataToBeSent);
  }
}