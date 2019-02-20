import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { IdentityPageComponent } from './identity-page/identity-page.component';
import { RelationPageComponent } from './relation-page/relation-page.component';
import { SelectionPageComponent } from './selection-page/selection-page.component';

const routes: Routes = [
  { path: 'Initial', component: InitialPageComponent },
  { path: 'Identity', component: IdentityPageComponent },
  { path: 'Relation', component: RelationPageComponent },
  { path: 'Selection', component: SelectionPageComponent },
  { path: '', component: InitialPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
