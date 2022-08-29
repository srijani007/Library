import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { signIncreds } from "../models/signinpage";   
import {token} from '../models/tokenmodel';
@Injectable({
    providedIn: 'root'
})
export class AuthSignInService{
    baseUrl ='https://authenticationwebapi20220829062858.azurewebsites.net/Authentication/SignIn';
    
    constructor(private http: HttpClient){}

    token: any;
 //login call
 Validate(cred : signIncreds ):Observable<signIncreds[]>{
     return this.http.post<signIncreds[]>(this.baseUrl, cred)    
   }
}