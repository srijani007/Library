import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { receipt } from '../models/getreceiptmodel';
import {ReceiptbyEmailService} from '../services/getReceiptservice'
import {PaymentService} from'../services/buyBookservice';
import { PaymentCompComponent } from '../payment-comp/payment-comp.component';

@Component({
  selector: 'app-getreciept-comp',
  templateUrl: './getreciept-comp.component.html',
  styleUrls: ['./getreciept-comp.component.css']
})
export class GetrecieptCompComponent implements OnInit {
  //BuyermailID:any;
  receipts: any[] | undefined;
  //receipts: any
   history:receipt={
  BuyerEmail:''
 } 
 buyername:any 

  constructor(private getReceiptservice:ReceiptbyEmailService,private paymentcomp:PaymentCompComponent ) { }

  ngOnInit(): void {
    
  }

  historyofPayments(){
    console.log(this.history)
    this.getReceiptservice.getPaymentdetails(this.history)
        .subscribe(
          response => { this.receipts=response 
            console.log("respone: " + response)
            
          }         
        );
        }
        
       // 


      GeneratePDF(){
        this.paymentcomp.generatePDF();  
      }
      
}
