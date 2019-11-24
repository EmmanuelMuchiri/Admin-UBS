import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService  implements HttpInterceptor {

  constructor(private apiservice:ApiService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'Authorization': 'dragon'
    });
    
const clone = req.clone({
  headers: headers
})

    return next.handle(clone)

  };

}
