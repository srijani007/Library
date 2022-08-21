import { Component, OnInit } from '@angular/core';
import { signIncreds } from '../models/signinpage';
import { AuthSignInService } from '../services/signinservice';
@Component({
  selector: 'app-signin-comp',
  templateUrl: './signin-comp.component.html',
  styleUrls: ['./signin-comp.component.css']
})
export class SigninCompComponent implements OnInit {
  isSignIn =false;
 //creds: signIncreds[] = [];
  cred: signIncreds = {
     UserName: "",
     UserPass: ""
  }
  constructor(private signinservice: AuthSignInService) { }

  ngOnInit(): void {

  }

token:any

  onSubmit() {
    if (this.cred.UserName != '' && this.cred.UserPass != '') {
      this.signinservice.Validate(this.cred)
        .subscribe(
          response => {this.token=response
            localStorage.setItem('token',this.token.token)      
           console.log("hi",this.token.token)
            this.isSignIn=true
          }
        )//this.showmsg true;
    }
      
    }

}


