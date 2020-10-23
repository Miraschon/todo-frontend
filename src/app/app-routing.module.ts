import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TitleDetailComponent} from './title-detail/title-detail.component';
import {HelloComponent} from './hello/hello.component';

const routes: Routes = [
  { path: 'home', component: HelloComponent },
  { path: 'title/:id', component: TitleDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
