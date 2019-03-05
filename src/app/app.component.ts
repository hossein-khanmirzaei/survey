import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { SurveyService } from './survey.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('imageElement') private imageElement: ElementRef<any>;
  @ViewChild('modalElement') private modalElement: ElementRef<any>;
  title = 'survey';

  constructor(private rd: Renderer2, private surveyService: SurveyService) { }

  ngOnInit() {
    this.surveyService.imageElement = this.imageElement;
    this.surveyService.modalElement = this.modalElement;
    this.setImagePath(this.imageElement);
  }

  setImagePath(el: ElementRef<any>) {
    this.rd.setAttribute(this.imageElement.nativeElement, "src", "./assets/img/banner1.png");
  }
}
