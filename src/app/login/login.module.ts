import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule }   from './login-routing.module';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        LoginRoutingModule,
        ReactiveFormsModule
    ],
    exports: [
        LoginPageComponent,
        RegisterFormComponent,
        LoginFormComponent,
    ],
    declarations: [
        LoginPageComponent,
        RegisterFormComponent,
        LoginFormComponent,
    ]
})
export class LoginModule { }
