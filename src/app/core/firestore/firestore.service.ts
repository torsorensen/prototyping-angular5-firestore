import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { 
    AngularFirestore, 
    AngularFirestoreDocument,
    AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

import { DebugService } from '../debug/debug.service';


/**
 * This service extends the already provided Firestore capabilities.
 * It builds on own experiences as well as valuable insights from angularfirebase.com.
 * Some methods are even directly borrowed from said source.
 * Credit to: https://angularfirebase.com/lessons/firestore-advanced-usage-angularfire/
 */
@Injectable()
export class FirestoreService {

    constructor(
        private afs: AngularFirestore,
        private debugService:DebugService
    ) { 
        debugService.log(FirestoreService.name, "()");
    }



    

    /**
     *  Returns the AngularFirestoreDocument or AngularFirestoreCollection
     */
    doc<T>(docRef:string):AngularFirestoreDocument<T> {
        return this.afs.doc<T>(docRef);
    }

    coll<T>(collRef:string):AngularFirestoreCollection<T[]> {
        return this.afs.collection<T[]>(collRef);
    }




    /**
     * Returns the Observables directly as provided by Firestore. $ indicates an Observable.
     * To be used either ...
     * a: with async pipe directly in html template
     * b: unwrapped into arrays upon subscription by the caller (if this usage, remember to unsubscribe the observable in ngOnDestroy)
     */
    doc$<T>(docRef:string):Observable<T> {
        return this.afs.doc<T>(docRef).valueChanges();
    }

    coll$<T>(collRef:string):Observable<T[]> {
        return this.afs.collection<T>(collRef).valueChanges();
    }

    collWithIds$<T>(collRef:string):Observable<any[]> {
        return this.coll(collRef).snapshotChanges().map(actions => {
            return actions.map( (a) => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            });
        });
    }

    





    /**
     * CRUD-like operations on Documents and Collections in Firestore
     */
    update<T>(docRef:string, data:any):Promise<void> {
        return this.doc(docRef).update({
                ...data,
                updatedAt: this.timestamp
            }
        );
    }

    set<T>(docRef:string, data:any):Promise<void> {
        const timestamp = this.timestamp;
        return this.doc(docRef).set({
                ...data,
                updatedAt: timestamp,
                createdAt: timestamp
            }
        );
    }

    add<T>(collRef:string, data):Promise<any> {
        const timestamp = this.timestamp;
        return this.coll(collRef).add({
            ...data,
            updatedAt: timestamp,
            createdAt: timestamp
        });
    }

    delete<T>(docRef:string):Promise<void> {
        return this.doc(docRef).delete();
    }

    //Special method. Will first check if doc exists. If YES it will update non-destructively. If NO it will set a new document.
    //TODO: Figure out for which use cases this method is superior
    upsert<T>(docRef:string, data: any) {
        const doc = this.doc(docRef).snapshotChanges().take(1).toPromise();
        return doc.then( (snap) => {
            return snap.payload.exists ? this.update(docRef, data) : this.set(docRef, data);
        });
    }

    //Use this indicator to let the Firestore server assign a timestamp as value to a field,
    //e.g. this.firestoreService.update(docRef, { updatedAt: this.firebaseService.timestamp });
    get timestamp() {
        return firebase.firestore.FieldValue.serverTimestamp();
    }

    //Use this indicator to let Firestore remove the field when using the document update function specifically,
    //e.g. this.firestoreService.update(docRef, { name: this.firebaseService.deleteField });
    get deleteField() {
        return firebase.firestore.FieldValue.delete();
    }




    /**
     * Useful functions using non-Firestore capabilities provided by firebase
     */

     //TODO Transaction
     //TODO Atomic/Batch operations






    /**
     * Dump the values of a document or collection Observable to console for debugging purposes
     */
    inspectDoc(docRef:string): void {
        const tick = new Date().getTime()
        this.doc(docRef).snapshotChanges()
            .take(1)
            .do(d => {
              const tock = new Date().getTime() - tick
              console.log(`Loaded Document in ${tock}ms`, d)
            })
            .subscribe();
      }
      inspectColl(collRef:string): void {
        const tick = new Date().getTime()
        this.coll(collRef).snapshotChanges()
            .take(1)
            .do(c => {
              const tock = new Date().getTime() - tick
              console.log(`Loaded Collection in ${tock}ms`, c)
            })
            .subscribe();
      }

    
}
