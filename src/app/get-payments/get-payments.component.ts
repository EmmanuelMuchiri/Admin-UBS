import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Payment } from '../postdataObj';

@Component({
  selector: 'app-get-payments',
  templateUrl: './get-payments.component.html',
  styleUrls: ['./get-payments.component.css']
})
export class GetPaymentsComponent implements OnInit {

  dataSource = new PaymentsDataSource(this.apiservice);
  displayedColumns = ['id','payers_name','payers_phone','narration','pay_date'];
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){

    // return this.apiservice.getPayments()
    // .subscribe(data => this.payments = data);

  }
}

export class PaymentsDataSource extends DataSource<any>{
  constructor(private apiservice:ApiService){
    super();
}

connect():Observable<Payment[]>{
  return this.apiservice.getPayments()
}

disconnect() {}

}