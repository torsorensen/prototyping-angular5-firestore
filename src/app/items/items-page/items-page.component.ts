import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Item } from '../../core/items/item.model';
import { ItemsService } from '../../core/items/items.service';

@Component({
    selector: 'app-items-page',
    templateUrl: './items-page.component.html',
    styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {

    items$:Observable<Item[]>;
    
    constructor(
        private router:Router,
        private itemsService:ItemsService
    ) { }

    ngOnInit() {
        this.items$ = this.itemsService.getItems$();
    }

    doAddItem() {
        let item = {
            name:"New Item",
            description:"With Desc",
        };
        this.itemsService.addItem(item);
    }

    doDeleteItem(item:Item) {
        this.itemsService.deleteItem(item.id);
    }

    doGotoItem(item:Item) {
        let id = item.id;
        this.router.navigate(['/item', id]);
    }

}
