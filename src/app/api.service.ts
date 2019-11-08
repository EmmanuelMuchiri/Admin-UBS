import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url : string='https://jambopay.herokuapp.com/api/GetMerchants/';
  
  billUrl: string ='https://jambopay.herokuapp.com/api/BillsDetails/';


  constructor(public http:HttpClient) { }

  getUsers(){
    return this.http.get<any[]>(this.url);
  }

  getBills(){
    return this.http.get<any[]>(this.billUrl);
  }
}
