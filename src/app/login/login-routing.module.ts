import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [{ 
    path: '',
    component: LoginPageComponent,
    children: [
        { path: '',    component: LoginPageComponent },
        //{ path: ':id', component: HeroDetailComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
