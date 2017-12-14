import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

    signupForm: FormGroup;
    //detailForm: FormGroup;

    constructor(
        public fb: FormBuilder,
        private router: Router,
        public auth: AuthService
    ) { }

    ngOnInit() {

        // First Step
        this.signupForm = this.fb.group({
            'email': ['', [
                Validators.required,
                Validators.email
            ]
            ],
            'password': ['', [
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

        // Second Step
        //this.detailForm = this.fb.group({
        //    'catchPhrase': ['', [Validators.required]]
        //});

    }

    // Using getters will make your code look pretty
    get email() { return this.signupForm.get('email') }
    get password() { return this.signupForm.get('password') }
    //get catchPhrase() { return this.detailForm.get('catchPhrase') }

    // Step 1
    signup() {
        return this.auth.emailSignUp(this.email.value, this.password.value).then(() => {
            console.log("PROCEED");
            this.router.navigate(['/about']);
        });
    }

    // Step 2
    //setCatchPhrase(user) {
    //    return this.auth.updateUser(user, { catchPhrase: this.catchPhrase.value })
   // }
}