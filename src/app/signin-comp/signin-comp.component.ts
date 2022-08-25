import { Component, OnInit } from '@angular/core';
import { signIncreds } from '../models/signinpage';
import { AuthSignInService } from '../services/signinservice';
import * as jwt_decode from "jwt-decode";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin-comp',
  templateUrl: './signin-comp.component.html',
  styleUrls: ['./signin-comp.component.css']
})
export class SigninCompComponent implements OnInit {
  isSignIn:boolean =false;
  isFailed:boolean =false;
 //creds: signIncreds[] = [];
  cred: signIncreds = {
     UserName: "",
     UserPass: ""
  }
  userRole:any
  constructor(private signinservice: AuthSignInService,private jwtHelper :JwtHelperService,private router:Router,
   ) { }

  ngOnInit(): void {

  }


token:any
decodedtoken:any
tokenPayload:any

  onSubmit() {
    if (this.cred.UserName != '' && this.cred.UserPass != '') {
      this.signinservice.Validate(this.cred)
        .subscribe(
          response => {            
            this.token=response
            localStorage.setItem('token',this.token.token)      
           console.log(this.token.token)
           this.isFailed=false
            this.isSignIn=true
            console.log("Login successful");
            this.GetTokenDecoded()
            console.log(this.userRole)
            if(this.userRole == "author" || this.userRole == "Author"){
              this.router.navigate(['/author-books-comp'])  ///book -add ,book edit
            }else{
              this.router.navigate(['/home-comp']) //reader //search,payment
            }
            
          },error =>{
            this.isSignIn=false
            this.isFailed=true
            console.log("Login Failed")}
        )
    }      
  }
  username:any
   log = [];
  GetTokenDecoded() {
    console.log(this.jwtHelper.decodeToken(this.token.token))
    this.tokenPayload = this.jwtHelper.decodeToken(this.token.token);
    this.userRole=this.tokenPayload.UserRole 
    this.username=this.tokenPayload.UserName 
    localStorage.setItem('userrole',this.userRole)
    localStorage.setItem('username',this.username)
    
   // this.s=this.userRole.userRole
   //.log("this.tokenPa")
    console.log(localStorage.getItem('userrole'))

    console.log(this.username)
  }
}


