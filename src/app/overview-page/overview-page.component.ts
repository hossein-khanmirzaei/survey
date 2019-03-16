import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {

  knOptions;
  overalValue: number;
  rateChanged: boolean = false;
  constructor(private router: Router, private location: Location, private surveyService: SurveyService) {
    if (!this.surveyService.surveyAnswer.nationalCode) {
      this.router.navigateByUrl('/Initial');
    }
  }

  ngOnInit() {
    this.getInitialData();
  }

  getInitialData() {
    this.overalValue = this.surveyService.surveyAnswer.overalValue;
    this.knOptions = {
      readOnly: true,
      skin: {
        type: 'tron',
        width: 5,
        color: this.getColor(this.overalValue / 100),
        spaceWidth: 3
      },
      animate: {
        enabled: false,
      },
      size: 300,
      barColor: this.getColor(this.overalValue / 100),
      trackWidth: 30,
      barWidth: 30,
      textColor: this.getColor(this.overalValue / 100),
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
    if (this.overalValue <= 95) {
      this.overalValue += 5;
      this.rangeChange();
    }
  }

  decreaseRate() {
    if (this.overalValue >= 5) {
      this.overalValue -= 5;
      this.rangeChange();
    }
  }

  rangeChange() {
    this.knOptions = {
      skin: {
        color: this.getColor(this.overalValue / 100),
      },
      barColor: this.getColor(this.overalValue / 100),
      textColor: this.getColor(this.overalValue / 100),
    }
    this.rateChanged = true;
  }
  /*
    onSubmit(validity: boolean) {
      if (validity) {
        this.surveyService.surveyAnswer.overalValue = this.overalValue;
        this.router.navigateByUrl('/Last');
      }
      else {
        $('#myModal').modal();
      }
    }
  */

  sendSurveyData() {
    this.surveyService.sendSurveyData();
  }
  goBack() {
    this.location.back();
  }

}
