import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-checkbox',
  template: `
  <div class="checkbox">
    <input *ngIf="album.inCart === true" type="checkbox" checked (click)="toggleInCart(false)"/>
    <input *ngIf="album.inCart === false" type="checkbox" (click)="toggleInCart(true)"/>
    <label>Add to Cart</label>
    <hr>
  </div>
  `
})

export class AlbumCheckboxComponent {
  @Input() album: Album;
  @Output() changeCartCountSender = new EventEmitter();


  toggleInCart(status: boolean){
    this.album.inCart = status;
    if(status === true) {
      Album.cartCount++;
    } else {
      Album.cartCount--;
    }
    this.changeCartCountSender.emit(Album.cartCount);
  }
}
