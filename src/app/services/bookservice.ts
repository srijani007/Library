import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../models/bookmodel";
@Injectable({
    providedIn: 'root'

})
export class BooksService{
    baseUrl ='https://localhost:7006/Book/AddBooks';
    bookUrl ='https://localhost:7006/Book/GetBooks'
    constructor(private http: HttpClient){}

 //add Books 
  Addbooks(book : Book):Observable<Book[]> {
     // detail. = '00000000-0000-0000-0000-000000000000';
     return this.http.post<Book[]>(this.baseUrl, book,{
        headers: new HttpHeaders
        ({
        'Authorization': 'Bearer ' + localStorage.getItem("token"),          
        'Content-Type': 'application/json' 
        })
        }); 
  }
  //Get all cards
  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl);
}
}