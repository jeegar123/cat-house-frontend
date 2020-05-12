import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Cat } from '../common/cat';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem = null;

  total: number = 0

  checkCartIsEmpty = false


  sharedTotal = new BehaviorSubject<number>(this.total);
  sharedItems = new BehaviorSubject<CartItem>(this.items);


  constructor() { }

  addItem(item: Cat) {

    if (!this.checkCartIsEmpty) {
      this.items = new CartItem()
      this.checkCartIsEmpty = true;
    }
    this.items.cat.push(item)
  }

  getTotalPrice() {
    for (let item of this.items.cat) {
      this.total += item.price;
    }
    this.sharedTotal.next(this.total);
    this.sharedItems.next(this.items);

    return this.total;
  }

  remove(cat: Cat) {
    this.sharedItems.value.cat=this.items.cat.filter(obj => obj !== cat);
    this.sharedItems.next(this.items);
  }

}
