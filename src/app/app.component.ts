import { Component } from '@angular/core';
import { Item } from './classes/elements/Item';

const addItemValidation = (text: string, price: number) =>
    !text
    || text.trim().length === 0
    || price === undefined
    || price === null
    || price < 0;

@Component({
    selector: 'purchase-app',
    templateUrl: '../templates/purchase-app.html',
})
export class AppComponent {
    text: string;
    price: number = 0;
    items: Item[] = [
        { purchase: 'Bread', done: false, price: 15.9 },
        { purchase: 'Butter', done: false, price: 60 },
        { purchase: 'Potato', done: true, price: 22.7 },
        { purchase: 'Cheese', done: false, price: 300 },
    ];
    addItem(text: string, price: number): boolean {
        if (addItemValidation(text, price)) {
            return;
        }
        return Boolean(
            this.items.push(new Item(text, price))
        );
    }
}
