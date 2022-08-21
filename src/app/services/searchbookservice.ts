import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { userDetails}  from "../models/usermodel"
import { receipt } from "../models/getreceiptmodel";
import { Bookcondtn } from "../models/booksearchmodel";
@Injectable({
    providedIn: 'root'

})
export class UserSignUpService{
    baseUrl ='https://localhost:7267/Reader/BasedonCriteria';
   
    constructor(private http: HttpClient){}

    searchBooks(keyword: string): Observable<Bookcondtn>{
        const searchUrl = `${this.baseUrl}/category=${keyword}`;
        //return this.getBooksList(searchUrl);
        return this.http.get<Bookcondtn>(searchUrl);
      }


  //Get book by authorname
//   getAllBooks():Observable<Bookcondtn[]>{
//     return this.http.get<Bookcondtn[]>(this.baseUrl);
  }
