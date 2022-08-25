import { Component } from '@angular/core';
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
  constructor(public jwtHelper :JwtHelperService) { }
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
}
}


