import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/bookmodel';
import { BooksService } from '../services/bookservice';
import { Router } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css']
})
export class HomeCompComponent implements OnInit {
  Booklist: any[] | undefined;
  listofbooks:any
  searchBook: Book[] = [];
  Category: any;
  Price: any;
  AuthorName: any;
  lowerValue: any;
  higherValue: any;
  temp:any
 
  username: any | undefined;
  usertype=localStorage.getItem("userrole");
  tempFilterSearch: any;
  constructor(private getbookservice: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.getbookservice.getAllBooks()
      .subscribe(
        response => { this.Booklist = response  
        }
      );
  }

  proceedpayment(item: any){
console.log(item)
          localStorage.setItem("BookId",item.bookId);
          localStorage.setItem("BookTitle",item.title);
          localStorage.setItem("BookLogo",item.logo);
          localStorage.setItem("BookPrice",item.price);
          localStorage.setItem("BookContent", item.content);
          console.log(localStorage.getItem('BookPrice'));
          console.log(localStorage.getItem('BookTitle'));
          this.router.navigate(['/payment-comp']);
  }

  routetopayment(pagename: string) {
    this.router.navigate([`${pagename}`]);
  }
  
  search() {
    if (this.Category == '' || this.Price == '' || this.AuthorName == '') {
      this.ngOnInit();
    }
    if (this.Category) {
      this.Booklist = this.Booklist?.filter(res => {
        return res.category.toLocaleLowerCase().match(this.Category.toLocaleLowerCase());
      })
    }
    if (this.Price != null) {
      console.log(this.Price);
      this.Booklist = this.Booklist?.filter(res => {
        console.log(res.price);
        return res.price == this.Price;
      })
    }
    if (this.AuthorName) {
      this.Booklist = this.Booklist?.filter(res => {
        return res.authorName.toLocaleLowerCase().match(this.AuthorName.toLocaleLowerCase());
      })
    }
  } 

}