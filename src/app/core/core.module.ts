import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebugService } from './debug/debug.service';
import { FirestoreService } from './firestore/firestore.service';
import { AuthService } from './auth/auth.service';
//import { AuthGuard } from './auth/auth-guard';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
    ],
    declarations: [
    ],
    providers: [
        DebugService,
        AuthService,
        //AuthGuard,
        FirestoreService
    ]
})
export class CoreModule { }
