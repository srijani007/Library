import { Component, OnInit } from '@angular/core';
import { payment } from '../models/paymentmodel';
import {PaymentService} from'../services/buyBookservice';

//import * as pdfMake  from 'pdfmake/build/pdfmake'; 
const pdfMake = require('pdfmake/build/pdfmake.js');
import * as pdfFonts from "pdfmake/build/vfs_fonts"; 


(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-payment-comp',
  templateUrl: './payment-comp.component.html',
  styleUrls: ['./payment-comp.component.css']
})
export class PaymentCompComponent implements OnInit {

  purchase: payment={
    BuyerEmail:'',
    BuyerName:'',
    BookId: 0
  }
  constructor(private paymentservice :PaymentService) { }

  ngOnInit(): void {
  }

  purchasedetails: any
 
  generatePDF(action = "open") {
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
                        text: `Date: ${new Date().toLocaleString()}`,  
                        alignment: 'right'  
                    },  
                    {  
                        text: `Bill No : ${((Math.random() * 1000).toFixed(0))}`,  
                        alignment: 'right'  
                    }  
                ]  
            ]  
          },{
          table: {  
            headerRows: 1,  
            widths: ['*', 'auto', 'auto'],  
            body: [  
                ['Buyer Name', 'Buyer Email', 'BookId'],  
                [this.purchase.BuyerName,this.purchase.BuyerEmail,this.purchase.BookId]
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

  onSubmit() {
     this.generatePDF();
        this.paymentservice.Addpayment(this.purchase)
        .subscribe(
          response => {            
            console.log(this.purchasedetails=response);
           
            
          }
        )//this.showmsg true;
    }

}
