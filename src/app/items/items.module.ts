import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule }   from './items-routing.module';

import { ItemsPageComponent } from './items-page/items-page.component';
import { ItemPageComponent } from './item-page/item-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ItemsRoutingModule
    ],
    exports: [
        ItemsPageComponent,
        ItemPageComponent
    ],
    declarations: [
        ItemsPageComponent,
        ItemPageComponent
    ]
})
export class ItemsModule { }
