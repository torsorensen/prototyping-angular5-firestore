import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

    constructor(
        private router:Router,
        public auth:AuthService
    ) { }

    ngOnInit() {
    }

    doSignOut() {
        this.auth.signOut().then( () => {
            console.log("Logged out!");
            this.router.navigate(['/login']);
        });
    }

    doGotoPage(page:string) {
        this.router.navigate(['/' + page]);
    }

}
