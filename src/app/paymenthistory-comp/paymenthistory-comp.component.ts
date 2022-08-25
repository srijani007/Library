import { Component, OnInit } from '@angular/core';
import {ReceiptbyEmailService} from '../services/getReceiptservice';
import {receipt} from '../models/getreceiptmodel';
//import * as pdfMake  from 'pdfmake/build/pdfmake'; 
const pdfMake = require('pdfmake/build/pdfmake.js');
import * as pdfFonts from "pdfmake/build/vfs_fonts"; 
import { Router } from '@angular/router';
import {Getbookbyid} from '../models/bookmodel'

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-paymenthistory-comp',
  templateUrl: './paymenthistory-comp.component.html',
  styleUrls: ['./paymenthistory-comp.component.css']
})
export class PaymenthistoryCompComponent implements OnInit {
  receipts: any[] | undefined;
  Bookcontent: any
  justcontent:any
  ifhide:boolean =true
   history:receipt={
  BuyerEmail:localStorage.getItem('mailIdbuyer')
 } 
 idbook:Getbookbyid={
  BookId:0
 }
 buyername:any 
buyermail:any
  constructor(private getReceiptservice:ReceiptbyEmailService, private router:Router ) { }

  ngOnInit(): void {
    this.historyofPayments()
  }

  historyofPayments(){
    console.log(localStorage.getItem('BookbuyermailId'))
    console.log(this.history)
    this.getReceiptservice.getPaymentdetails(this.history)
        .subscribe(
          response => { this.receipts=response 
            console.log( response)
            
          }         
        );
        }

        generatePDF(action = "open",item:any) {
          let docDefinition = {  
            content: [  
                // Previous configuration  
                {  
                    text: 'Customer Details',  
                    style: 'sectionHeader'  
                }  ,
                {  
                  columns: [                  
                      [  
                          {  
                              text: `Date: ${item.paymentDate}`,  
                              alignment: 'right'  
                          },  
                          {  
                              text: `Bill No : ${item.paymentId}`,  
                              alignment: 'right'  
                          }  
                      ]  
                  ]  
                },{
                table: {  
                  headerRows: 1,  
                  widths: ['*', 'auto', 'auto','auto','auto'],  
                  body: [  
                      ['Buyer Name', 'Buyer Email', 'BookId','Title','Price'],  
                      [item.buyerName,item.buyerEmail,item.bookId
                      ,item.title,item.price]
                    ]  
                 } 
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
       
     viewcontent(id: any){ 
      
      this.idbook.BookId = id
          this.getReceiptservice.Getbookbyid(this.idbook)
    .subscribe(
       response => { console.log(response);
        this.Bookcontent=response
        this.justcontent=this.Bookcontent.content[0].content
        console.log(this.Bookcontent.content[0].content)
        this.ifhide=false
       // this.router.navigate(['/signin-comp'])
      });
          
        }
}
