import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Bills } from '../postdataObj'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bills-details',
  templateUrl: './bills-details.component.html',
  styleUrls: ['./bills-details.component.css']
})

export class BillsDetailsComponent implements OnInit {
  
  dataSource = new BillsDataSource(this.apiservice);
  displayedColumns = ['bill_id','Revstreams','customer_name','customer_phone','narration','subtotal','quantity','status'];


  constructor( private apiservice: ApiService) { }

  ngOnInit(){ 

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