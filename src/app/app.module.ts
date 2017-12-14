//Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Vendor imports
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

//App imports
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ItemsModule } from './items/items.module';
import { AuthGuard } from './core/auth/auth.guard';

import { Item } from './core/items/item.model';
import { ItemsService } from './core/items/items.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule.enablePersistence(),
        AngularFireAuthModule,

        LoginModule,
        ItemsModule,
        CoreModule,
        SharedModule,

        //Keep as last
        AppRoutingModule,
    ],
    providers: [
        AuthGuard,

        ItemsService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
