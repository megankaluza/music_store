import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector:'cart-display',
  template: `
  <div *ngFor="let currentAlbum of cartList | cart" class="panel">
  <h2>In da bag <img src="resources/img/money.png" alt="Money"></h2>
  <hr>
    <h4>{{currentAlbum.title}}</h4>
    <ul>
      <li>Price: {{currentAlbum.price}}</li>
    </ul>

  <div *ngIf="cartCount > 0 && !cartEmptied">
    <button (click)="makePurchase()">Confirm</button>
  </div>
  </div>
  `
})

export class CartDisplayComponent {
  @Input() cartList: Album[];
  @Input() cartCount: number;
  @Output() purchaseSender = new EventEmitter();
  public totalCost: number = 0;
  public cartEmptied: boolean = false;

  makePurchase() {
    this.purchaseSender.emit();
  }
}

// findTotal() {
//   for(var i=0; i < this.cartList.length; i++) {
//     this.totalCost = 0;
//     if(this.cartList[i].inCart === true) {
//       this.totalCost += this.cartList[i].price;
//     }
//   }
// }
