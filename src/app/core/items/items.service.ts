import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FirestoreService } from '../firestore/firestore.service';
import { Item } from './item.model';


@Injectable()
export class ItemsService {
    
   //a
   items:Observable<Item[]>;
   
   //b
   //items;
   
    constructor(
        private firestoreService:FirestoreService
    ) {

        //a: Fill array by referencing the observable$ and using async pipe in html template
        this.items = this.firestoreService.collWithIds$<Item>('items');
        
        //b: Fill array by subscribing to observable$ and unwrapping the items
        //   Note: Remember to unsubscribe in ngOnDestroy if using this method
        //this.firestoreService.collWithIds$('/items').subscribe( (items) => {
        //    console.log("New items available");
        //    this.items = items
        //});
    }

    addItem(item:Item):Promise<any> {
        return this.firestoreService.add("items", item);
    }

    deleteItem(id:string):Promise<void> {
        return this.firestoreService.delete("items/" + id);
    }
  
    //a: Return as observable
    getItems$() {
        console.log("Getting items$");
        return this.items;
    }

    //b1: Return as array (dangerous approach to return array as observable in constructor might not have provided data yet)
    //getItems() {
    //    console.log("Gettin items");
    //     return this.items;
    //}
    
    //b2: Return an observable of an array
    //getItems$() {
    //    console.log("getting items$");
    //    return Observable.of(this.items);
    //}

    getItem$(id: string | number):Observable<Item> {
        return this.getItems$()
        .map((items:Item[]) => items.find((item:Item) => item.id == id));
    }

  
}
