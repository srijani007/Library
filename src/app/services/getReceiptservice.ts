import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { receipt } from "../models/getreceiptmodel";
@Injectable({
    providedIn: 'root'

})
export class ReceiptbyEmailService{
    baseUrl ='https://localhost:7163/Reader/PaymentbyEmail';
   
    constructor(private http: HttpClient){}

getPaymentdetails(history:receipt):Observable<receipt[]>{
    return this.http.post<receipt[]>(this.baseUrl,history);}
}