import { Component, OnInit } from '@angular/core';
import { payment } from '../models/paymentmodel';
import {PaymentService} from'../services/buyBookservice';
import { Router } from '@angular/router';

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

  purchasedetails: any
 
  onSubmit() {
    console.log(this.purchase)
        this.paymentservice.Addpayment(this.purchase)
        .subscribe(
          response => {        
            this.purchasedetails=response;
            console.log(response)
            // localStorage.setItem('BookbuyermailId',this.purchase.BuyerEmail)  
            // localStorage.setItem('BookbuyerName',this.purchase.BuyerName)
            // console.log(localStorage.getItem('BookbuyermailId'))
            // console.log(localStorage.getItem('BookPrice'));
            // console.log(localStorage.getItem('BookTitle'));
               
          }
        )
    }  
}
