import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookHomeComponent } from './book-home/book-home.component';
import {RouterModule} from '@angular/router';
import { BookReadComponent } from './book-read/book-read.component';
import { BookUnreadComponent } from './book-unread/book-unread.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BookHomeComponent,
    BookReadComponent,
    BookUnreadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
