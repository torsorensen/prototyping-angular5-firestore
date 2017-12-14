import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    signInForm: FormGroup;

    constructor(
        private router: Router,
        public fb: FormBuilder,
        public auth: AuthService
    ) { }

    ngOnInit() {

        // First Step
        this.signInForm = this.fb.group({
            'email': ['test@test.com', [
                Validators.required,
                Validators.email
            ]
            ],
            'password': ['qweqwe123', [
                Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                Validators.minLength(6),
                Validators.maxLength(25),
                Validators.required
            ]
            ],
            'region': ['',
                []
            ],
        });

    }

    // Using getters will make your code look pretty
    get email() { return this.signInForm.get('email') }
    get password() { return this.signInForm.get('password') }

    signIn() {
        return this.auth.signInWithEmailAndPassword(this.email.value, this.password.value).then(() => {
            console.log("SIGNIN PROCEED");
            this.router.navigate(['/about']);
        });
    }
}
