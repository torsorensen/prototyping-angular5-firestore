import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsPageComponent } from './items-page/items-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { AuthGuard } from '../core/auth/auth.guard';

const routes: Routes = [
    {  path: 'items',       component: ItemsPageComponent, canActivate: [AuthGuard] },
    {  path: 'item/:id',    component: ItemPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ItemsRoutingModule { }
