import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../models/bookmodel";
import {Authorbooks} from '../models/authordeatilsmodel';
@Injectable({
    providedIn: 'root'

})
export class AuthorBooksService{
    baseUrl ='https://localhost:7275/book/GetBookbyName';
    constructor(private http: HttpClient){}


  //Get all books of author
  getAuthorBooks(book: Authorbooks):Observable<Book[]>{
    return this.http.post<Book[]>(this.baseUrl,book);  
}
}