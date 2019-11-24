import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
// import { User } from '../../user.model';
import { Merchant } from '../postdataObj';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services';


@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.component.html',
  styleUrls: ['./merchant-details.component.css']
})
export class MerchantDetailsComponent implements OnInit {

  dataSource = new MerchantDataSource(this.authenticationService);
  displayedColumns = ['id', 'Business_name', 'Email', 'Phone_number', 'merchant_id', 'Industry', 'Physical_address', 'Town', 'join_date'];


  constructor(private authenticationService:AuthenticationService){

  }

  ngOnInit(){

    // return this.apiservice.getUsers()
    // .subscribe(data => this.users = data);

  }
}

  export class MerchantDataSource extends DataSource<any>{
    constructor(private authenticationService:AuthenticationService){
      super();
  }
  
  connect():Observable<Merchant[]>{
    return this.authenticationService.getUsers()
  }
  
  disconnect() {}

}



