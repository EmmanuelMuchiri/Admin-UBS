import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { Bill, Bills, Merchant, RevenueStreams, Payment } from '../postdataObj';


import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    url: string = 'https://jambopay.herokuapp.com/api/GetMerchants/';

    loginUrl = 'https://jambopay.herokuapp.com/api/Login/';

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;


    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(this.loginUrl, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    getUsers(): Observable<Merchant[]> {
        return this.http.get<Merchant[]>(this.url)
            .pipe(
                retry(1),
                //   catchError(this.handleError)
            )
    }
}