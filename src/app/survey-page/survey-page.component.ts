import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';
import { Page } from '../page';
import { Survey } from '../survey';

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

  constructor(private route: ActivatedRoute, private surveyService: SurveyService) {
    this.surveyService.selectedSurveyType = "ProfessorsResidence"; //temp
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
    this.currentPageNumber++;
    this.currentPage = this.surveyContent.pages[this.currentPageNumber - 1];
    this.updateLinks(this.currentPageNumber);
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
