import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ItemsService } from '../../core/items/items.service';
import { Item } from '../../core/items/item.model';

@Component({
    selector: 'app-item-page',
    templateUrl: './item-page.component.html',
    styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

    item$:Observable<Item>;

    constructor(
        private route:ActivatedRoute,
        private router:Router,
        private itemsService:ItemsService
    ) { }

    ngOnInit() {
        this.item$ = this.route.paramMap.switchMap( (params: ParamMap) => 
            this.itemsService.getItem$(params.get('id'))
        );
            
    }

    doDeleteItem(item) {
        let id = item ? item.id : null;
        this.itemsService.deleteItem(id).then( () => {
            this.router.navigate(['/items']);
        });
    }
}
