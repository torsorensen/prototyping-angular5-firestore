import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
//import { NotifyService } from './notify.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private auth: AuthService,
        //private notify: NotifyService
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log("AuthGuard | canActivate()");

        return this.auth.user
            .take(1)
            .map(user => !!(user)) // && user.catchPhrase))
            .do(loggedIn => {
                if (!loggedIn) {
                    console.log("You must be logged in to view this page!");
                    // this.notify.update('You must be logged in and have a catch phrase!', 'error')
                    this.router.navigate(['/login']);
                }
            })
    }
}