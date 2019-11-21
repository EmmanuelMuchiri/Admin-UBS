import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { RevenueStreams } from '../postdataObj';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-revenue-streams',
  templateUrl: './revenue-streams.component.html',
  styleUrls: ['./revenue-streams.component.css']
})
export class RevenueStreamsComponent implements OnInit {

  dataSource = new RevenueStreamsDataSource(this.apiservice);
  displayedColumns = ['id','name','revenue_description','Merchant_Owner','price','Industrys'];


  constructor(private apiservice:ApiService){

  }

  ngOnInit(){

    // return this.apiservice.getRevenueStreams()
    // .subscribe(data => this.revenueStreams = data);

  }
}

export class RevenueStreamsDataSource extends DataSource<any>{
  constructor(private apiservice:ApiService){
    super();
}

connect():Observable<RevenueStreams[]>{
  return this.apiservice.getRevenueStreams()
}

disconnect() {}

}