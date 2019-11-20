import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-get-payments',
  templateUrl: './get-payments.component.html',
  styleUrls: ['./get-payments.component.css']
})
export class GetPaymentsComponent implements OnInit {

  payments: any[];

  constructor(private apiservice:ApiService){

  }

  ngOnInit(){

    return this.apiservice.getPayments()
    .subscribe(data => this.payments = data);

  }
}

