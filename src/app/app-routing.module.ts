import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { IdentityPageComponent } from './identity-page/identity-page.component';

const routes: Routes = [
  { path: 'Initial', component: InitialPageComponent },
  { path: 'Identity', component: IdentityPageComponent },
  { path: '', component: InitialPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
