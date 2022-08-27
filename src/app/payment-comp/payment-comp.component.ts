import { Component, OnInit } from '@angular/core';
import { payment } from '../models/paymentmodel';
import {PaymentService} from'../services/buyBookservice';
import { Router } from '@angular/router';
import { timeStamp } from 'console';
import {ReceiptbyEmailService} from '../services/getReceiptservice';
import { receipt } from '../models/getreceiptmodel';

@Component({
  selector: 'app-payment-comp',
  templateUrl: './payment-comp.component.html',
  styleUrls: ['./payment-comp.component.css']
})
export class PaymentCompComponent implements OnInit {

  purchase: payment={
    BuyerEmail:'',
    BuyerName:localStorage.getItem('username') || '',
    BookId:parseInt(localStorage.getItem('BookId') || "0"),
    Title:localStorage.getItem('BookTitle') || '',
    Logo:localStorage.getItem('BookLogo') || '',
    Price:localStorage.getItem('BookPrice') || '',
  }
  
  constructor(private paymentservice :PaymentService,public router:Router) { }

  ngOnInit(): void {
  }

  purchasedetails: any;
  bought: boolean=false;
  notbought:boolean=false;
  paymntclick:boolean=false;
  
  onSubmit() { 
    if(this.purchase.BookId == 0){
   localStorage.setItem('Mailid',this.purchase.BuyerEmail)   
   console.log('aftersetting')
   this.router.navigate(['/paymenthistory-comp'])      
    }
    else{
    console.log(this.purchase)
        this.paymentservice.Addpayment(this.purchase)
        .subscribe(
          response => {        
            this.purchasedetails=response;
            console.log(this.bought);
            console.log(response)
            console.log(this.purchasedetails.result)
            if (this.purchasedetails.result === 'Book has already bought' )
            {              
                this.bought=true;
                this.notbought=false;
                console.log(this.bought)
                // need to check this as well
            }
            else{
              this.bought=false;
              this.notbought=true;
            }
             localStorage.setItem('BookbuyermailId',this.purchase.BuyerEmail)  
             localStorage.setItem('BookbuyerName',this.purchase.BuyerName)
            // console.log(localStorage.getItem('BookbuyermailId'))
            // console.log(localStorage.getItem('BookPrice'));
            // console.log(localStorage.getItem('BookTitle'));
               
          }
         
        )
    }
    } 
  
   
    back(){
      console.log(this.purchasedetails.result)
      if(this.purchasedetails.result === 'Book has already bought')
      {
        this.router.navigate(['/home-comp'])
      }
      else
      {
        this.router.navigate(['/paymenthistory-comp'])              
      }
      
    } 
}
