import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import {FormsModule} from '@angular/forms';
import { TitleDetailComponent } from './title-detail/title-detail.component';
import { AppRoutingModule } from './app-routing.module';
import {HelloService} from './services/hello.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TitleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
