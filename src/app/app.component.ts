import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { SigninCompComponent } from './signin-comp/signin-comp.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignIn= false;
   userrole:any=''
   username:any=''
   tokenPayload:any
   userRole:any
   userName:any   
   onPymntHistyclick:boolean=false;
  constructor(public jwtHelper :JwtHelperService,private router:Router) { }
//   ngOnInit(): void {}
  


detailsexists(): any{
  this.userName= localStorage.getItem('username')
  return localStorage.getItem('username');
}
isUserType(): any{
  this.userRole= localStorage.getItem('userrole')
  return localStorage.getItem('userrole');
}

clearstorage() {
  // localStorage.clear();
  localStorage.removeItem('token');
   localStorage.removeItem('username');
   localStorage.removeItem('userrole');
   localStorage.removeItem('BookbuyermailId');
   localStorage.removeItem('BookbuyerName');
   localStorage.removeItem('BookTitle');
   localStorage.removeItem('BookId');
   localStorage.removeItem('BookLogo');
   localStorage.removeItem('BookPrice');
   localStorage.removeItem('BookContent');
   localStorage.removeItem('mailIdbuyer');
   localStorage.removeItem('Mailid');
}
onclickofpayhistory()
{
  if(localStorage.getItem('BookbuyermailId') == null)
  {    
    this.onPymntHistyclick=true
    this.router.navigate(['/payment-comp']);
  }
  else {
    this.router.navigate(['/paymenthistory-comp'])
  }
  
}
}


