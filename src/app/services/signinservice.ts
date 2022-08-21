import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { signIncreds } from "../models/signinpage";   
import {token} from '../models/tokenmodel';
@Injectable({
    providedIn: 'root'
})
export class AuthSignInService{
    baseUrl ='https://localhost:7061/Authentication/Validate';
    constructor(private http: HttpClient){}

    token='';
 //login call
 Validate(cred : signIncreds ):Observable<signIncreds[]>{
     return this.http.post<signIncreds[]>(this.baseUrl, cred)
    
   }



}