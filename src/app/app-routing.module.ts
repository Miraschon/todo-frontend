import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TitleDetailComponent} from './title-detail/title-detail.component';

const routes: Routes = [
  { path: 'title', component: TitleDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
