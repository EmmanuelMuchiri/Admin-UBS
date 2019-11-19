import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
// import { User } from '../../user.model';



@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.component.html',
  styleUrls: ['./merchant-details.component.css']
})
export class MerchantDetailsComponent implements OnInit {

  users: any[];

  constructor(private apiservice:ApiService){

  }

  ngOnInit(){

    return this.apiservice.getUsers()
    .subscribe(data => this.users = data);

  }

}

