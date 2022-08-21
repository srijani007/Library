import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/bookservice';
import { Book } from '../models/bookmodel';
@Component({
  selector: 'app-book-compo',
  templateUrl: './book-compo.component.html',
  styleUrls: ['./book-compo.component.css']
})
export class BookCompoComponent implements OnInit {

  book: Book={
   BookId: 0,
    Logo : "" ,
    title : "",
   Category : "",
    Price: 0,
    AuthorName : "",
    Publisher : "",
    PublishedDate :new Date() ,
    Content : "",
    Active : true,
    CreatedDate : new Date(),
    ModifiedDate : new Date()
  }

  
  constructor(private bookservice :BooksService) {

   }

   ngOnInit(): void {
  }

  
  onSubmit(){
    console.log(localStorage.getItem("token"))
    this.bookservice.Addbooks(this.book).subscribe(
      response =>{console.log(response)}
    );
  } 

}
