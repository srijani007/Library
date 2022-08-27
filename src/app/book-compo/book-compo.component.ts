import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/bookservice';
import { Book } from '../models/bookmodel';
import { ActivatedRoute, Router } from '@angular/router';
import {bookbyId} from '../models/bookbyId';

@Component({
  selector: 'app-book-compo',
  templateUrl: './book-compo.component.html',
  styleUrls: ['./book-compo.component.css']
})
export class BookCompoComponent implements OnInit {
 
  book: Book={
   BookId: 0,
    Logo : "" ,
    Title : "",
   Category : "",
    Price: 0,
    AuthorName : localStorage.getItem('username') || "",
    Publisher : "",
    PublishedDate :new Date() ,
    Content : "",
    Active : "",
    CreatedDate : new Date(),
    ModifiedDate : new Date()
  }
  idbook:bookbyId={
    BookId:0
  }
  id: any;
addbtn: boolean=false;
updatebtn:boolean=true;
isAddMode: boolean =false;
  
  constructor(private bookservice :BooksService,private router:Router,private activatedroute:ActivatedRoute) {

   }

   ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['bookId']
    console.log(this.id)
    this.isAddMode = !this.id
    this.getbookdetailsbyId(this.id)
    if(this.id != undefined){
      this.updatebtn= true
      this.addbtn=false
    }else{
      this.addbtn=true
      this.updatebtn=false
  }
}

  
  onSubmit(){   
    this.bookservice.Addbooks(this.book).subscribe(
      response =>{console.log(response)
      this.router.navigate(['/author-books-comp'])
      }
    );
  }


bookresponse:any
  getbookdetailsbyId(id :any){
    this.idbook.BookId=id
    console.log(id)
    console.log(this.book)
    this.bookservice.getbookbyId(this.idbook)
    .subscribe(
      response =>{
        this.bookresponse=response
        this.book.BookId=this.bookresponse.content[0].bookId
        this.book.Active=this.bookresponse.content[0].active
        this.book.AuthorName=this.bookresponse.content[0].authorName
        this.book.Category=this.bookresponse.content[0].category
        this.book.Content=this.bookresponse.content[0].content
        this.book.Logo=this.bookresponse.content[0].logo
        this.book.Price=this.bookresponse.content[0].price
        this.book.Publisher=this.bookresponse.content[0].publisher
        this.book.Title=this.bookresponse.content[0].title

        console.log(this.book)
        console.log(this.bookresponse)
      })}

      
onUpdate(){
  console.log("inside update")
  console.log(this.book)
  this.bookservice.updateBookbyId(this.book).subscribe(
    response=>{
      console.log(response)
      this.router.navigate(['/author-books-comp'])
        },error =>{
          console.log(error)
        }
        
        )}

// onDelete(){
//   this.bookservice.updateBookbtId(this.book).subscribe(
//     response=>{
//       console.log(response)
//       this.router.navigate(['/author-books-comp'])
//         },error =>{
//           console.log(error)
//         }
        
//         )}

}
