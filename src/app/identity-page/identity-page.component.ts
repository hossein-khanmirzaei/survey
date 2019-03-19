import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import { Gender } from '../gender.enum';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(private router: Router, private surveyService: SurveyService, private toastrService: ToastrService, private auth: AuthService) {
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
      this.auth.login()
        .subscribe(
          (response) => {
            if (response['JWT']) {
              this.auth.jwtToken = response['JWT'];
              this.router.navigateByUrl('/Relation');
            }
            else {
              this.toastrService.error('خطا در ارتیاط با سرور!', 'توجه!', {});
            }
          },
          (error: HttpErrorResponse) => {
            this.toastrService.error('خطا در ارتیاط با سرور!', 'توجه!', {});
            console.log({ 'status': error.statusText, 'message': error.message });
          }
        );
    }
    else {
      this.toastrService.error('لطفاً به تمامی سوالات پاسخ دهید.', 'توجه!', {});
    }
  }
}
