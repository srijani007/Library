import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { userDetails}  from "../models/usermodel"
import { receipt } from "../models/getreceiptmodel";
@Injectable({
    providedIn: 'root'

})
export class UserSignUpService{
    baseUrl ='https://localhost:7267/Reader/PaymentbyEmail ';
   
    constructor(private http: HttpClient){}



getPayment():Observable<receipt>{
    return this.http.get<receipt>(this.baseUrl);}
}