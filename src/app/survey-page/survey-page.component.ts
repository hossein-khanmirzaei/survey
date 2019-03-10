import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import { Page } from '../page';
import { Survey } from '../survey';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css'],
  host: {
    class: 'h-100 w-100'
  }
})
export class SurveyPageComponent implements OnInit {

  @ViewChild('scrollContainer') el: ElementRef;

  surveyType: string;
  surveyContent: Survey;
  currentPage: Page;
  prevPageLink: string;
  nextPageLink: string;
  /*nextLinkValue: string;*/
  currentPageNumber: number;

  constructor(private route: ActivatedRoute, private router: Router, private rd: Renderer2, private surveyService: SurveyService, private toastrService: ToastrService) {
    if (!this.surveyService.surveyAnswer.nationalCode) {
      this.router.navigateByUrl('/Initial');
    }
    //this.surveyService.surveyAnswer.ratingAnswers = [];
    //this.surveyService.surveyAnswer.selectedSurveyType = "ProfessorsResidence"; //temp
  }

  ngOnInit() {
    this.surveyContent = this.surveyService.getCurrentSurveyContent();
    this.currentPageNumber = Number(this.route.snapshot.paramMap.get('id'));
    this.currentPage = this.surveyContent.pages[this.currentPageNumber - 1];
    this.updateLinks(this.currentPageNumber);
  }

  goToPrevPage() {
    this.currentPageNumber--;
    this.currentPage = this.surveyContent.pages[this.currentPageNumber - 1];
    this.updateLinks(this.currentPageNumber);
    this.rd.setProperty(this.el.nativeElement, "scrollTop", "0");
    if (this.currentPageNumber == 0)
      this.router.navigateByUrl('/Selection');
    else
      this.router.navigateByUrl(`/Survey/Page/${this.currentPageNumber}`);
  }

  goToNextPage() {
    let isAllAnswersField: boolean = true;
    this.currentPage.questions.forEach(item => {
      if ((item.type == "rating" || item.type == "options") && item.answer == "") {
        isAllAnswersField = false;
      }
    });
    if (isAllAnswersField) {
      this.updateAnswers();
      this.currentPageNumber++;
      this.currentPage = this.surveyContent.pages[this.currentPageNumber - 1];
      this.updateLinks(this.currentPageNumber);
      this.rd.setProperty(this.el.nativeElement, "scrollTop", "0");
      if (this.currentPageNumber > this.surveyContent.pageCount)
        this.router.navigateByUrl('/Overview');
      else
        this.router.navigateByUrl(`/Survey/Page/${this.currentPageNumber}`);
    }
    else {
      this.toastrService.error('لطفاً به تمامی سوالات پاسخ دهید.', 'توجه!', {
        timeOut: 3000
      });
    }
  }

  updateAnswers() {
    this.currentPage.questions.forEach(item => {
      const index = this.surveyService.surveyAnswer.ratingAnswers.findIndex((q) => q.questionCode === item.questionCode);
      if (index === -1) {
        this.surveyService.surveyAnswer.ratingAnswers.push({ questionCode: item.questionCode, answerCode: item.answer })
      } else {
        this.surveyService.surveyAnswer.ratingAnswers[index].answerCode = item.answer;
      }
    });
  }

  updateLinks(currentPage: number) {
    if (currentPage <= 1) {
      this.prevPageLink = "/Selection";
      this.nextPageLink = `/Survey/Page/${currentPage + 1}`;
      /*this.nextLinkValue = "بعدی";*/
    }
    else if (currentPage >= this.surveyContent.pageCount) {
      this.prevPageLink = `/Survey/Page/${currentPage - 1}`;
      this.nextPageLink = "/Overview";
      /*this.nextLinkValue = "تکمیل";*/
    }
    else {
      this.prevPageLink = `/Survey/Page/${currentPage - 1}`;
      this.nextPageLink = `/Survey/Page/${currentPage + 1}`;
      /*this.nextLinkValue = "بعدی";*/
    }
  }
}
