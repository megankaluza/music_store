import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector:'cart-display',
  template: `
  <h2>Your Albums:</h2>
  <div *ngFor="let currentAlbum of cartList | cart">
    <h4>{{currentAlbum.title}}</h4>
  </div>
  `
})

export class CartDisplayComponent {
  @Input() cartList: Album[];
}
