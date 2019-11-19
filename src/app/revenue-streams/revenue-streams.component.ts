import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-revenue-streams',
  templateUrl: './revenue-streams.component.html',
  styleUrls: ['./revenue-streams.component.css']
})
export class RevenueStreamsComponent implements OnInit {

  revenueStreams: any[];

  constructor(private apiservice:ApiService){

  }

  ngOnInit(){

    return this.apiservice.getRevenueStreams()
    .subscribe(data => this.revenueStreams = data);

  }
}
