import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCompoComponent } from './book-compo/book-compo.component';
import {​​​​​​ FormsModule }​​​​​​ from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SigninCompComponent } from './signin-comp/signin-comp.component';
import { UserDetailsCompComponent } from './userDetails-comp/userDetails-comp.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { PaymentCompComponent } from './payment-comp/payment-comp.component';
import { GetrecieptCompComponent } from './getreciept-comp/getreciept-comp.component';
import { BooksearchCompComponent } from './booksearch-comp/booksearch-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCompoComponent,
    SigninCompComponent,
    UserDetailsCompComponent,
    HomeCompComponent,
    PaymentCompComponent,
    GetrecieptCompComponent,
    BooksearchCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
