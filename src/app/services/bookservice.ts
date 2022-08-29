import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../models/bookmodel";
import { bookbyId } from "../models/bookbyId";

@Injectable({
    providedIn: 'root'

})

export class BooksService {
  
    baseUrl = 'https://bookapi20220829065620.azurewebsites.net/Book/AddBooks';
    bookUrl = 'https://bookapi20220829065620.azurewebsites.net/Book/GetBooks';
    conditions = 'https://readerapi20220829070218.azurewebsites.net/Reader/BasedonCriteria';
    getbookbyid = 'https://bookapi20220829065620.azurewebsites.net/Book/GetDetailsbyId';
    updatebook = 'https://bookapi20220829065620.azurewebsites.net/Book/UpdateBook';




    constructor(private http: HttpClient) { }

    //add Books 
    Addbooks(book: Book): Observable<Book[]> {
        console.log(localStorage.getItem("token"))
        return this.http.post<Book[]>(this.baseUrl, book, {
            headers: new HttpHeaders
                ({
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                })
        });
    }

    //Get all cards
    getAllBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.bookUrl);
    }

    getbookbyId(idbook: bookbyId): Observable<Book[]> {
        return this.http.post<Book[]>(this.getbookbyid, idbook)
    }

    updateBookbyId(book: Book): Observable<Book[]> {
        return this.http.put<Book[]>(this.updatebook, book,{
            headers: new HttpHeaders
                ({
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                })
        });}

    deletBookbyId(book:Book): Observable<Book> {
        return this.http.delete<Book>(this.updatebook)}
}
