import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import { Page } from '../page';
import { Survey } from '../survey';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css'],
  host: {
    class: 'h-100 w-100'
  }
})
export class SurveyPageComponent implements OnInit {

  surveyType: string;
  surveyContent: Survey;
  currentPage: Page;
  prevPageLink: string;
  nextPageLink: string;
  nextLinkValue: string;
  currentPageNumber: number;

  constructor(private route: ActivatedRoute, private router: Router, private surveyService: SurveyService, private modalService: NgbModal) {
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
    }
    else {
      this.modalService.open("OK!", { centered: true });
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
      this.nextLinkValue = "بعدی";
    }
    else if (currentPage >= this.surveyContent.pageCount) {
      this.prevPageLink = `/Survey/Page/${currentPage - 1}`;
      this.nextPageLink = "/Last";
      this.nextLinkValue = "تکمیل";
    }
    else {
      this.prevPageLink = `/Survey/Page/${currentPage - 1}`;
      this.nextPageLink = `/Survey/Page/${currentPage + 1}`;
      this.nextLinkValue = "بعدی";
    }
  }
}
