import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { SurveyAnswer } from '../survey-answer';
import { SurveyContent } from '../survey-content';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {

  knOptions: any;
  overallValue: number;
  rateChanged: boolean = false;
  constructor(private router: Router, private location: Location, private surveyService: SurveyService, private toastrService: ToastrService) {
    if (!this.surveyService.surveyAnswer.nationalCode) {
      this.router.navigateByUrl('/Initial');
    }
  }

  ngOnInit() {
    this.getInitialData();
  }

  getInitialData() {
    this.overallValue = this.surveyService.surveyAnswer.overallValue;
    this.knOptions = {
      readOnly: true,
      skin: {
        type: 'tron',
        width: 5,
        color: this.getColor(this.overallValue / 100),
        spaceWidth: 3
      },
      animate: {
        enabled: false,
      },
      size: 300,
      barColor: this.getColor(this.overallValue / 100),
      trackWidth: 30,
      barWidth: 30,
      textColor: this.getColor(this.overallValue / 100),
      step: 5,
      max: 100,
    }
  }

  getColor(value: number): string {
    //value from 0 to 1
    var hue = (value * 120).toString(10);
    return ["hsl(", hue, ",100%,50%)"].join("");
  }

  increaseRate() {
    if (this.overallValue <= 95) {
      this.overallValue += 5;
      this.rangeChange();
    }
  }

  decreaseRate() {
    if (this.overallValue >= 5) {
      this.overallValue -= 5;
      this.rangeChange();
    }
  }

  rangeChange() {
    this.knOptions = {
      skin: {
        color: this.getColor(this.overallValue / 100),
      },
      barColor: this.getColor(this.overallValue / 100),
      textColor: this.getColor(this.overallValue / 100),
    }
    this.rateChanged = true;
  }

  onSubmit() {
    this.surveyService.surveyAnswer.overallValue = this.overallValue;
    this.surveyService.sendSurveyData()
      .subscribe(
        (response) => {
          if (response && response['success']) {
            this.surveyService.resetAnswers();
            this.router.navigateByUrl('/Last');
          }
          else {
            this.toastrService.error('خطا در ارسال اطلاعات!', 'توجه!', {});
            if(response)
              console.log(response['failureMessage']);
          }
        },
        (error: HttpErrorResponse) => {
          this.toastrService.error('خطا در ارتیاط با سرور!', 'توجه!', {});
          console.log({ 'status': error.statusText, 'message': error.message });
        }
      )
  }

  goBack() {
    this.location.back();
  }

}
