import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule }   from './about-routing.module';

import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AboutRoutingModule
    ], 
    exports: [
        AboutPageComponent
    ],
    declarations: [
        AboutPageComponent
    ]
})
export class AboutModule { }
