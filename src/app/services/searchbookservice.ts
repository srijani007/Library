import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { userDetails}  from "../models/usermodel"
import { receipt } from "../models/getreceiptmodel";
import { Bookcondtn } from "../models/booksearchmodel";
import {Getbookbyid} from  "../models/bookmodel";
@Injectable({
    providedIn: 'root'

})
export class UserSignUpService{
    baseUrl ='https://readerapi20220829070218.azurewebsites.net/Reader/BasedonCriteria';

    
   
    constructor(private http: HttpClient){}

    searchBooks(keyword: string): Observable<Bookcondtn>{
        const searchUrl = `${this.baseUrl}/category=${keyword}`;
        return this.http.get<Bookcondtn>(searchUrl);
      }

    
 }
