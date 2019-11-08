import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bills-details',
  templateUrl: './bills-details.component.html',
  styleUrls: ['./bills-details.component.css']
})
export class BillsDetailsComponent implements OnInit {

  bills: any[];

  constructor(public apiservice:ApiService){

  }

  ngOnInit(){

    return this.apiservice.getBills()
    .subscribe(data => this.bills = data);

  }

}
