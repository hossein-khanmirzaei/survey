import { Component, OnInit, Input } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Question } from '../question';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() question: Question;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;

  selectedRate: number;

  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    this.tuneAnswers();
  }

  onRateSelect(e: Event) {
    let ans: string = (<HTMLButtonElement>e.currentTarget).value;
    /*
    const index = this.surveyService.surveyAnswer.ratingAnswers.findIndex((q) => q.questionCode === this.question.questionCode);
    if (index === -1) {
      this.surveyService.surveyAnswer.ratingAnswers.push({ questionCode: this.question.questionCode, answerCode: ans })
    } else {
      this.surveyService.surveyAnswer.ratingAnswers[index].answerCode = ans;
    }
    */
    this.question.answer = ans;
    this.color1 = this.color2 = this.color3 = this.color4 = this.color5 = "btn-outline-secondary";
    this.tuneAnswers();
    //console.log((<HTMLButtonElement>e.currentTarget).value);
  }

  tuneAnswers() {
    let ans: string = this.question.answer;
    switch (ans) {
      case '1': {
        this.color1 = 'worse';
        break;
      }
      case '2': {
        this.color2 = 'bad';
        break;
      }
      case '3': {
        this.color3 = 'so-so';
        break;
      }
      case '4': {
        this.color4 = 'good';
        break;
      }
      case '5': {
        this.color5 = 'better';
        break;
      }
    }
  }

}
