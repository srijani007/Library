import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { payment } from "../models/paymentmodel";
@Injectable({
    providedIn: 'root'
})
export class PaymentService{
    baseUrl ='https://localhost:7163/Reader/PurchaseBook';

    constructor(private http: HttpClient){}
    

//purchase Book
Addpayment(purchase : payment):Observable<payment[]> {
    return this.http.post<payment[]>(this.baseUrl, purchase);   
    
 }
}