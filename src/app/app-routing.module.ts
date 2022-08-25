import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninCompComponent } from './signin-comp/signin-comp.component';
import {UserDetailsCompComponent} from './userDetails-comp/userDetails-comp.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { BookCompoComponent } from './book-compo/book-compo.component';
import { PaymentCompComponent } from './payment-comp/payment-comp.component';
import { GetrecieptCompComponent } from './getreciept-comp/getreciept-comp.component';
import { AuthorBooksCompComponent } from './author-books-comp/author-books-comp.component';

const routes: Routes = [{path: 'signin-comp', component: SigninCompComponent},
 {path:'userDetails-comp',component:UserDetailsCompComponent},
  {path:'book-compo',component:BookCompoComponent},
{path:'home-comp',component:HomeCompComponent},
{path:'payment-comp',component:PaymentCompComponent},
{path:'',component:HomeCompComponent},
{path:'getreciept-comp',component:GetrecieptCompComponent},
{path:'author-books-comp',component:AuthorBooksCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
