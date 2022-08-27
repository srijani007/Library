import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninCompComponent } from './signin-comp/signin-comp.component';
import {UserDetailsCompComponent} from './userDetails-comp/userDetails-comp.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { BookCompoComponent } from './book-compo/book-compo.component';
import { PaymentCompComponent } from './payment-comp/payment-comp.component';
import { AuthorBooksCompComponent } from './author-books-comp/author-books-comp.component';
import { PaymenthistoryCompComponent } from './paymenthistory-comp/paymenthistory-comp.component';

const routes: Routes = [{path: 'signin-comp', component: SigninCompComponent},
 {path:'userDetails-comp',component:UserDetailsCompComponent},
{path:'book-compo',component:BookCompoComponent},
{path:'home-comp',component:HomeCompComponent},
{path:'payment-comp',component:PaymentCompComponent},
{path:'',component:HomeCompComponent},
{path:'author-books-comp',component:AuthorBooksCompComponent},
{path:'paymenthistory-comp',component:PaymenthistoryCompComponent},
{path:'book-compo/:bookId',component:BookCompoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
