import { Component, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { SurveyService } from './survey.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('imageElement') private imageElement: ElementRef<any>;
  title = 'survey';
  @HostListener('document:click')
  onMouseMove(e) {
    this.surveyService.restartTimer();
  }
  modalMessage: string = 'لطفاً به تمامی سوالات پاسخ دهید.';

  constructor(private rd: Renderer2, private surveyService: SurveyService) { }

  ngOnInit() {
    this.surveyService.imageElement = this.imageElement;
    this.setImagePath(this.imageElement);
  }

  setImagePath(el: ElementRef<any>) {
    this.rd.setAttribute(this.imageElement.nativeElement, "src", "./assets/img/Front.jpg");
  }
}
