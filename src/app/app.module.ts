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
import { BooksearchCompComponent } from './booksearch-comp/booksearch-comp.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthorBooksCompComponent } from './author-books-comp/author-books-comp.component';
import { PaymenthistoryCompComponent } from './paymenthistory-comp/paymenthistory-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    BookCompoComponent,
    SigninCompComponent,
    UserDetailsCompComponent,
    HomeCompComponent,
    PaymentCompComponent,
    BooksearchCompComponent,
    AuthorBooksCompComponent,
    PaymenthistoryCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
    
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }



