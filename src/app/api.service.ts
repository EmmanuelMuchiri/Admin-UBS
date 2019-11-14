import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Bill } from './postdataObj';


@Injectable({
  providedIn: 'root'
})


export class ApiService {
  url : string='https://jambopay.herokuapp.com/api/GetMerchants/';
  
  billUrl: string ='https://jambopay.herokuapp.com/api/BillsDetails/';

  paymentsUrl: string = 'https://jambopay.herokuapp.com/api/GetPayments/';

  revenueStreamsUrl: string = 'https://jambopay.herokuapp.com/api/GetRevenueStreams/';

  generateBillUrl: string = 'http://jambopay.herokuapp.com/api/GenerateBill/';


  constructor(public http:HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  getUsers(){
    return this.http.get<any[]>(this.url);
  }

  getBills(){
    return this.http.get<any[]>(this.billUrl);
  }

  getPayments(){
    return this.http.get<any[]>(this.paymentsUrl);
  }

  getRevenueStreams(){
    return this.http.get<any[]>(this.revenueStreamsUrl);
  }

  generateBill(bill): Observable<Bill> {
    return this.http.post<Bill>(this.generateBillUrl, JSON.stringify(bill), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

  }


