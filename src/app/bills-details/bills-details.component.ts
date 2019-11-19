import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Bills } from '../postdataObj'

@Component({
  selector: 'app-bills-details',
  templateUrl: './bills-details.component.html',
  styleUrls: ['./bills-details.component.css']
})

export class BillsDetailsComponent implements OnInit {
  dataSource = new BillsDataSource(this.apiservice);
  displayedColumns = ['id','Revstreams','customer_name','customer_email','narration','subtotal','quantity','status','bill_id']


  constructor( private apiservice: ApiService) {

  }

  ngOnInit(){

    // return this.apiservice.getBills()
    // .subscribe(data => this.bills = data);
  }

}

export class BillsDataSource extends DataSource<any>{
  constructor(private apiservice:ApiService){
    super();
}

connect():Observable<Bills[]>{
  return this.apiservice.getBills()
}

disconnect() {}
}