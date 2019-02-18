import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { IdentityPageComponent } from './identity-page/identity-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    IdentityPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
