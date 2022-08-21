import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/bookmodel';
import {BooksService} from '../services/bookservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css']
})
export class HomeCompComponent implements OnInit {
  Booklist : any[] | undefined;
 
  constructor(private getbookservice: BooksService ,private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.getbookservice.getAllBooks()
    .subscribe(
      response => {this.Booklist=response}
    );
  }

  routetopayment(pagename: string){
    this.router.navigate([`${pagename}`]);
  }
}
