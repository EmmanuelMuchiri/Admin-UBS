import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators'
import { AuthenticationService } from '../_services';
import { from, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const currentUser = this.authenticationService.currentUserValue;
        return currentUser.pipe(
            map(user => {
                // if user, return true, else return false
                // if (user) {
                    return true;
                // }
                // else {
                //     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                //     return false;
                // }
            }), take(1)
        );
        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        // return false;
    }
}
