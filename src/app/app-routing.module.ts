import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModule }    from './login/login.module';
//import { ItemsModule }    from './items/items.module';
import { AboutModule } from './about/about.module';

import { AuthGuard } from './core/auth/auth.guard';

//loadChildren is a reference to lazy loaded child routes
const routes: Routes = [
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
    { path: '', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
    imports: [
        LoginModule,
        //ItemsModule,
        AboutModule,
        RouterModule.forRoot(routes,
            //{ enableTracing: true } // <-- debugging purposes only
        ),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
