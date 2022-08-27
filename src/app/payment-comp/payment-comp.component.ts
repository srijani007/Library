import { Component, OnInit } from '@angular/core';
import { payment } from '../models/paymentmodel';
import {PaymentService} from'../services/buyBookservice';
import { Router } from '@angular/router';
import { timeStamp } from 'console';

@Component({
  selector: 'app-payment-comp',
  templateUrl: './payment-comp.component.html',
  styleUrls: ['./payment-comp.component.css']
})
export class PaymentCompComponent implements OnInit {

  purchase: payment={
    BuyerEmail:'',
    BuyerName:'',
    BookId:parseInt(localStorage.getItem('BookId') || "0"),
    Title:localStorage.getItem('BookTitle') || '',
    Logo:localStorage.getItem('BookLogo') || '',
    Price:localStorage.getItem('BookPrice') || ''
  }
  
  constructor(private paymentservice :PaymentService,public router:Router) { }

  ngOnInit(): void {
  }

  purchasedetails: any;
  bought: boolean=false;
  notbought:boolean=true;
 
  onSubmit() {
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
            }
            else{
              this.bought=false;
              this.notbought=true;
            }
            // localStorage.setItem('BookbuyermailId',this.purchase.BuyerEmail)  
            // localStorage.setItem('BookbuyerName',this.purchase.BuyerName)
            // console.log(localStorage.getItem('BookbuyermailId'))
            // console.log(localStorage.getItem('BookPrice'));
            // console.log(localStorage.getItem('BookTitle'));
               
          }
        )
    }  
}
