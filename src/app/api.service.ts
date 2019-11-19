import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Bill, Bills } from './postdataObj';


@Injectable({
  providedIn: 'root'
})


export class ApiService {
  url : string='https://jambopay.herokuapp.com/api/GetMerchants/';
  
  billUrl: string ='https://jambopay.herokuapp.com/api/BillsDetails/';

  paymentsUrl: string = 'https://jambopay.herokuapp.com/api/GetPayments/' 
  
  // ('Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTczODI4NDY3LCJqdGkiOiJhMTU0YTY4NGM1ZjY0NGI5YWFiMTZkYzViYTVkNDI0NiIsInVzZXJfaWQiOjF9.yd8cOZ0BZ6u01hCDBq0uOae-rJqESOF8dGa_a8bytRk');

  revenueStreamsUrl: string = 'https://jambopay.herokuapp.com/api/GetRevenueStreams/';

  generateBillUrl: string = 'http://jambopay.herokuapp.com/api/GenerateBill/';


  constructor(private http:HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 


  getUsers(){
    return this.http.get<any[]>(this.url, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getBills(): Observable<Bills[]>{
    return this.http.get<Bills[]>(this.billUrl)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getPayments(){
    return this.http.get<any[]>(this.paymentsUrl, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getRevenueStreams(){
    return this.http.get<any[]>(this.revenueStreamsUrl, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
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


