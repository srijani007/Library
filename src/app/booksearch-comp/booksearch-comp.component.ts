import { Component, OnInit } from '@angular/core';
import {Bookcondtn} from'../models/booksearchmodel';
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
  constructor() { }

  ngOnInit(): void {
  }

}
