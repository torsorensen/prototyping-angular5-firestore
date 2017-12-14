import { Injectable } from '@angular/core';
//import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
//import { NotifyService } from './notify.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

interface User {
    uid: string;
    email: string;
    photoURL: string;
    //catchPhrase?: string;
}

@Injectable()
export class AuthService {

    user: Observable<User>;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        //private router: Router,
        //private notify: NotifyService
    ) {

    // Define the user observable
    this.user = this.afAuth.authState
        .switchMap(user => {
            if (user) {
                // logged in, get custom user from Firestore
                return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
            }
            else {
                // logged out, null
                return Observable.of(null)
            }
        });
  }


    //// Email/Password Auth ////
    emailSignUp(email: string, password: string):Promise<void> {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
            return this.setUserDoc(user) // create initial user document
        })
        .catch(error => this.handleError(error) );
    }

    signInWithEmailAndPassword(email:string, password:string):Promise<void> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signOut():Promise<void> {
        return this.afAuth.auth.signOut();
    }

    // Update properties on the user document
    updateUser(user: User, data: any) { 
        return this.afs.doc(`users/${user.uid}`).update(data)
    }
    
    // If error, console log and notify user
    private handleError(error) {
        console.error(error)
        //this.notify.update(error.message, 'error')
    }

    // Sets user data to firestore after succesful login
    private setUserDoc(user) {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
        const data: User = {
            uid: user.uid,
            email: user.email || null,
            photoURL: 'https://goo.gl/Fz9nrQ'
        }
        return userRef.set(data)
    }
}