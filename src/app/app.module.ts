import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { UserIdleModule } from 'angular-user-idle';
import { KnobModule } from "@xmlking/ngx-knob";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { IdentityPageComponent } from './identity-page/identity-page.component';
import { RelationPageComponent } from './relation-page/relation-page.component';
import { SelectionPageComponent } from './selection-page/selection-page.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { DirectCommentPageComponent } from './direct-comment-page/direct-comment-page.component';
import { LastPageComponent } from './last-page/last-page.component';
import { QuestionContainerComponent } from './question-container/question-container.component';
import { RatingComponent } from './rating/rating.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    IdentityPageComponent,
    RelationPageComponent,
    SelectionPageComponent,
    SurveyPageComponent,
    DirectCommentPageComponent,
    LastPageComponent,
    QuestionContainerComponent,
    RatingComponent,
    OverviewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    UserIdleModule.forRoot({ idle: 60, timeout: 5, ping: 0 }),
    KnobModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
