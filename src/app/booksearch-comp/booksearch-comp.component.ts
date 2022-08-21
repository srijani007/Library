import { Component, OnInit } from '@angular/core';
import {Bookcondtn} from'../models/booksearchmodel';
import { ActivatedRoute } from '@angular/router';
import {BooksService} from '../services/bookservice';
@Component({
  selector: 'app-booksearch-comp',
  templateUrl: './booksearch-comp.component.html',
  styleUrls: ['./booksearch-comp.component.css']
})
export class BooksearchCompComponent implements OnInit {
conditions: Bookcondtn={
  Category:'',
  Price:0,
  AuthorName:''
}
Booklist : any[] | undefined;
  constructor(private searchbookservice: BooksService) { }

  ngOnInit(): void {
  }
  getAllBooks() {
    this.searchbookservice.getAllBooks()
    .subscribe(
      response => {this.Booklist=response}
    );
  }
}
