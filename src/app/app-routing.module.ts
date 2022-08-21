import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninCompComponent } from './signin-comp/signin-comp.component';
import {UserDetailsCompComponent} from './userDetails-comp/userDetails-comp.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { BookCompoComponent } from './book-compo/book-compo.component';
import { PaymentCompComponent } from './payment-comp/payment-comp.component';

const routes: Routes = [{path: 'signin-comp', component: SigninCompComponent},
 {path:'userDetails-comp',component:UserDetailsCompComponent},
  {path:'book-compo',component:BookCompoComponent},
{path:'home-comp',component:HomeCompComponent},
{path:'payment-comp',component:PaymentCompComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
