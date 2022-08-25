import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDetails } from '../models/usermodel';
import { UserSignUpService } from '../services/authorService';

@Component({
  selector: 'app-sign-up-comp',
  templateUrl: './userDetails-comp.component.html',
  styleUrls: ['./userDetails-comp.component.css']
})
export class UserDetailsCompComponent implements OnInit {
  userlist: any[] | undefined;
  isSignedUp=false
  detail: userDetails = {
    UserId: 0,
    UserName: '',
    Email: '',
    UserPass: '',
    UserRole: ''
  }

  

  constructor(private userservice: UserSignUpService,private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit() {
    
     this.userservice.signing_up(this.detail)
    .subscribe(
       response => { console.log(response);
        this.isSignedUp=true;
        this.router.navigate(['/signin-comp'])
      });
   
  }

//  onSubmit() {
//     if (this.detail.UserId === null) {
//       this.userservice.signing_up(this.detail)
//        .subscribe(
//          response => {
//               this.getAllUsers();
//               this.detail = {
//                 UserId: 0,
//                 UserName: '',
//                 Email: '',
//                 UserPass: '',
//                 UserRole: ''
//               };
//             }
//           );
//      }
//       else {
//         this.updateUserDetails(this.detail);
//       }
//     }
//     updateUserDetails(detail: userDetails) {
//       this.userservice.updateUserDetails(detail)
//         .subscribe(
//           response => {
//             this.getAllUsers();
//           }
//         )
//     }

}

