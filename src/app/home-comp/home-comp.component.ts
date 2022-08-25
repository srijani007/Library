import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/bookmodel';
import { BooksService } from '../services/bookservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css']
})
export class HomeCompComponent implements OnInit {
  Booklist: any[] | undefined;
  searchBook: Book[] = [];
  Category: any;
  Price: any;
  AuthorName: any;
  lowerValue: any;
  higherValue: any;
  temp:any
  username: any | undefined;
  //usertype:any|undefined;
  usertype=localStorage.getItem("role");
  constructor(private getbookservice: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.getbookservice.getAllBooks()
      .subscribe(
        response => { this.Booklist = response }
      );
  }
// bookid:any
// bookname:any
//   ProceedPayment(item: any){
//     this.bookid=item.bookid;
//     localStorage.setItem('idbook',this.bookid)
//     this.bookname=item.bookname;
//     this.router.navigate(['/getreciept'])
//   }
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
      console.log("hi------")
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
  /////////////////////////////////////////////////////////////////////////////////////
  // searchPrice($event: { target: { value: string; }; }) {
  //   this.Price = $event.target.value.split("-");
  //   this.lowerValue = this.Price[0];
  //   this.higherValue = this.Price[1];
  //   this.applyFilters();
  // }
  // // PRICE
  
  // applyFilters() {
  //   if (this.Category == null) {
  //      temp = temp.filter((res) => {
  //       if ((Number(res.price1)) >= (Number(this.lowerValue)) && (Number(res.price1)) <= (Number(this.higherValue)))
  //         return res.price1.toLocaleLowerCase();
  //     });
  //   } else if (this.Category != null) {
  //     temp = temp.filter((res) => {
  //       if ((Number(res.price1)) >= (Number(this.lowerValue))
  //         && (Number(res.price1)) <= (Number(this.higherValue))) {
  //         return res.price1.toLocaleLowerCase();
  //       }
  //     })
  //   }

  //   this.tempFilterSearch = temp;
  // }
  ////////////////////////////////////////////////////////////////////////////////////////

