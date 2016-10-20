import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector:'cart-display',
  template: `
  <h2>Your Albums:</h2>
  <div *ngFor="let currentAlbum of cartList | cart" class="panel">
    <h4>{{currentAlbum.title}}</h4>
  </div>

  <div *ngIf="cartCount > 0 && !cartEmptied" class="panel purchase">
    <button class="purchase-button" (click)="makePurchase()">Confirm \${{cartCost}}</button>
  </div>
  `
})

export class CartDisplayComponent {
  @Input() cartList: Album[];
  @Input() cartCount: number;
  @Input() cartCost: number;
  @Output() purchaseSender = new EventEmitter();
  public totalCost: number = 0;
  public cartEmptied: boolean = false;

  makePurchase() {
    this.purchaseSender.emit();
  }
}
