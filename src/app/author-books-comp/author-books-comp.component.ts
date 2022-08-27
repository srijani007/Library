import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/bookmodel';
import { AuthorBooksService } from '../services/authorbooksservice';
import { Router } from '@angular/router';
import{Authorbooks} from '../models/authordeatilsmodel';
import{PaymenthistoryCompComponent} from '../paymenthistory-comp/paymenthistory-comp.component'
import{ReceiptbyEmailService} from '../services/getReceiptservice'
import{Getbookbyid} from '../models/bookmodel';
const pdfMake = require('pdfmake/build/pdfmake.js');
import * as pdfFonts from "pdfmake/build/vfs_fonts"; 


(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
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
  idbook:Getbookbyid={
    BookId:0
   }
  Bookcontent: any
  title: any;
  justcontent: any;
 
  constructor(private authbookservice : AuthorBooksService, private router: Router,private getReceiptservice : ReceiptbyEmailService) { }

  ngOnInit(): void {
    console.log(this.authbooklist)
    this.authbookservice.getAuthorBooks(this.authbooklist)
      .subscribe(
        response => { this.AuthorBooklist = response }
      );}
  
 
      ViewContent(id: any){       
        this.idbook.BookId = id
            this.getReceiptservice.Getbookbyid(this.idbook)
      .subscribe(
         response => { console.log(response);
          this.Bookcontent=response
          this.title = this.Bookcontent.content[0].title
          this.justcontent=this.Bookcontent.content[0].content
          console.log(this.Bookcontent.content[0].content)
          
          this.viewcontentofbook('open',this.justcontent,this.title)
         // this.router.navigate(['/signin-comp'])
        });}

       viewcontentofbook(action = "open",content :any, title:any) {
        let docDefinition = {  
          content: [  
              // Previous configuration  
              {  
                  text: title,  
                  style: 'sectionHeader'  
              }  ,
              {  
                columns: [                  
                    [  
                        {  
                            text: `Content: ${content}`  
                           // alignment: 'right'  
                        }                            
                    ]  
                ]  
              }
          ],  
          styles: {  
              sectionHeader: {  
                  bold: true,  
                  decoration: 'underline',  
                  fontSize: 14,  
                  margin: [0, 15, 0, 15]  
              }  
          }  
      }
    
        if(action==='download'){
          pdfMake.createPdf(docDefinition).download();
        }else if(action === 'print'){
          pdfMake.createPdf(docDefinition).print();      
        }else{
          pdfMake.createPdf(docDefinition).open();      
        }
    
      }  



}


