import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Bill } from '../postdataObj';
import { Router } from '@angular/router';


@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.css']
})


export class GenerateBillComponent implements OnInit {

  @Input() newBill = { name: '', phone: 0, email: '', narration: '', generated_by: ''}

    constructor(private apiservice:ApiService){ }

  ngOnInit() {
  }


  addBill(dataBill) {
    this.apiservice.generateBill(this.newBill).subscribe((data: {}) => {
    })
  }
  
}

