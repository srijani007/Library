import { Component, OnInit } from '@angular/core';
import { payment } from '../models/paymentmodel';
import {PaymentService} from'../services/buyBookservice';
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

  onSubmit() {
        this.paymentservice.Addpayment(this.purchase)
        .subscribe(
          response => {
            //localStorage.setItem('')
            console.log(this.purchasedetails=response);
            
          }
        )//this.showmsg true;
    }

}
