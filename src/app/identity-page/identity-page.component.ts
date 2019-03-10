import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import { Gender } from '../gender.enum';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-identity-page',
  templateUrl: './identity-page.component.html',
  styleUrls: ['./identity-page.component.css'],
  host: {
    class: 'h-100 w-100'
  }
})
export class IdentityPageComponent implements OnInit {

  nationalCode: string;
  age: number;
  gender: Gender;

  constructor(private router: Router, private surveyService: SurveyService, private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.getInitialData();
    this.surveyService.startWatchingTimer();
  }

  getInitialData() {
    this.nationalCode = this.surveyService.surveyAnswer.nationalCode;
    this.age = this.surveyService.surveyAnswer.age;
    this.gender = this.surveyService.surveyAnswer.gender;
  }

  onSubmit(validity: boolean) {
    if (validity) {
      this.surveyService.surveyAnswer.nationalCode = this.nationalCode;
      this.surveyService.surveyAnswer.age = this.age;
      this.surveyService.surveyAnswer.gender = this.gender;
      this.router.navigateByUrl('/Relation');
    }
    else {
      this.toastrService.error('لطفاً به تمامی سوالات پاسخ دهید.', 'توجه!', {});
    }
  }
  /*
    isValidIranianNationalCode(input) {
      if (!/^\d{10}$/.test(input))
        return false;
  
      var check = parseInt(input[9]);
      var sum = 0;
      var i;
      for (i = 0; i < 9; ++i) {
        sum += parseInt(input[i]) * (10 - i);
      }
      sum %= 11;
  
      return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
    }
  */
}
