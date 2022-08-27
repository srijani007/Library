import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/bookmodel';
import { AuthorBooksService } from '../services/authorbooksservice';
import { Router } from '@angular/router';
import{Authorbooks} from '../models/authordeatilsmodel'

@Component({
  selector: 'author-books-comp',
  templateUrl: './author-books-comp.component.html',
  styleUrls: ['./author-books-comp.component.css']
})
export class AuthorBooksCompComponent implements OnInit {
  AuthorBooklist: any[] | undefined;
  authbooklist : Authorbooks={
    UserName:localStorage.getItem('username')
  }
    constructor(private authbookservice : AuthorBooksService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.authbooklist)
    this.authbookservice.getAuthorBooks(this.authbooklist)
      .subscribe(
        response => { this.AuthorBooklist = response }
      );}
  
      // onDelete(item.bookId){

      // }
}
