import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Bill, Bills, Merchant, RevenueStreams, Payment } from './postdataObj';


@Injectable({
  providedIn: 'root'
})


export class ApiService {
  // url : string='https://jambopay.herokuapp.com/api/GetMerchants/';
  
  billUrl: string ='https://jambopay.herokuapp.com/api/BillsDetails/';

  paymentsUrl: string = 'https://jambopay.herokuapp.com/api/GetPayments/' 
  
  // ('Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTczODI4NDY3LCJqdGkiOiJhMTU0YTY4NGM1ZjY0NGI5YWFiMTZkYzViYTVkNDI0NiIsInVzZXJfaWQiOjF9.yd8cOZ0BZ6u01hCDBq0uOae-rJqESOF8dGa_a8bytRk');

  revenueStreamsUrl: string = 'https://jambopay.herokuapp.com/api/GetRevenueStreams/';



  constructor(private http:HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 


  // getUsers(): Observable<Merchant[]>{
  //   return this.http.get<Merchant[]>(this.url, this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  getBills(): Observable<Bills[]>{
    return this.http.get<Bills[]>(this.billUrl)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getPayments(): Observable<Payment[]>{
    return this.http.get<Payment[]>(this.paymentsUrl, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getRevenueStreams(): Observable<RevenueStreams[]>{
    return this.http.get<RevenueStreams[]>(this.revenueStreamsUrl, this.httpOptions)
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


