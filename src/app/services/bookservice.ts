import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../models/bookmodel";
@Injectable({
    providedIn: 'root'

})
export class BooksService{
    baseUrl ='https://localhost:7275/Book/AddBooks';
    bookUrl ='https://localhost:7275/Book/GetBooks';
    conditions ='https://localhost:7163/Reader/BasedonCriteria '
    constructor(private http: HttpClient){}

 //add Books 
  Addbooks(book : Book):Observable<Book[]> {
     console.log(localStorage.getItem("token"))
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