import { Component, OnInit, Renderer2 } from '@angular/core';
import { SurveyService } from '../survey.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css'],
  host: {
    class: 'h-100 w-100'
  }
})
export class InitialPageComponent implements OnInit {

  constructor(private rd: Renderer2, private surveyService: SurveyService, private auth: AuthService) { }

  ngOnInit() {
    this.surveyService.stopWatchingTimer();
    this.rd.setAttribute(this.surveyService.imageElement.nativeElement, "src", "./assets/img/Front.jpg");
  }
}
