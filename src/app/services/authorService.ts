import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { userDetails}  from "../models/usermodel"

@Injectable({
    providedIn: 'root'

})
export class UserSignUpService{
    baseUrl ='https://authorapi20220829064540.azurewebsites.net/Author/SignUp';
    
    baseUrl1='';
    constructor(private http: HttpClient){}


//Get all cards
getAllUsers():Observable<userDetails[]>{
    return this.http.get<userDetails[]>(this.baseUrl1);
}

 //to add users to db
 signing_up(detail : userDetails):Observable<userDetails> {
    return this.http.post<userDetails>(this.baseUrl, detail);
  }
  

  deleteUserDetails(id:string):Observable<userDetails>{
    return this.http.delete<userDetails>(this.baseUrl );
  }

  updateUserDetails(detail: userDetails):Observable<userDetails>{
    return this.http.put<userDetails>(this.baseUrl,detail);
  }
}

