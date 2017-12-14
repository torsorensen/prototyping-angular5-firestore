import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [{ 
    path: '',
    component: AboutPageComponent,
    children: [
        { path: '',    component: AboutPageComponent },
        //{ path: ':id', component: HeroDetailComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutRoutingModule {}
