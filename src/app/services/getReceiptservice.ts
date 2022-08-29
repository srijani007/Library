import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { receipt } from "../models/getreceiptmodel";
import {Getbookbyid} from "../models/bookmodel"
@Injectable({
    providedIn: 'root'

})
export class ReceiptbyEmailService{
    baseUrl ='https://readerapi20220829070218.azurewebsites.net/Reader/PaymentbyEmail';
    booksearchid ='https://bookapi20220829065620.azurewebsites.net/Book/GetDetailsbyId'

   
    constructor(private http: HttpClient){}

    getPaymentdetails(history:receipt):Observable<receipt[]>{
    return this.http.post<receipt[]>(this.baseUrl,history);}

    Getbookbyid(idbook: any): Observable<Getbookbyid[]>{
        return this.http.post<Getbookbyid[]>(this.booksearchid,idbook)
      }
}