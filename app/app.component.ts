import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1><img src="resources/img/logo.png" alt="CD"></h1>
    <hr>
    <div class="row">
      <div class="col-sm-5">
        <album-list
          [childAlbumList]="masterAlbumList"
          (editSender) = "selectAlbum2Edit($event)"
          (deleteSender) = "deleteAlbum($event)"
          (carryCartCountUpSender) = "sendCartCountOver($event)"
        ></album-list>
        <album-edit
          [album2Edit] = "selectedAlbum"
          (finishEditSender) = "finishEdit()"
        ></album-edit>
        <album-add
          (newAlbumSender) = "addAlbum($event)"
        ></album-add>
      </div>
      <div class="col-sm-5">
        <cart-display
          [cartList] = "masterAlbumList"
          [cartCount] = "cartCount"
          (purchaseSender) = "makePurchase()"
        ></cart-display>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterAlbumList: Album[] = [
    new Album("Dark Side of the Moon", "Pink Floyd", "Rock", 9.99),
    new Album("Abbey Road", "The Beatles", "Rock", 15.99),
    new Album("Lemonade", "Beyonce", "Pop", 20.99),
    new Album("Sevens Travels", "Atmosphere", "Hip-Hop", 5.99)
  ];

  public selectedAlbum: Album = null;
  public cartCount: number = 0;

  selectAlbum2Edit(_album: Album) {
    this.selectedAlbum = _album;
  }

  deleteAlbum(_album: Album) {
    this.masterAlbumList.splice(this.masterAlbumList.indexOf(_album),1);
  }

  finishEdit() {
    this.selectedAlbum = null;
  }

  addAlbum(_newAlbum: Album) {
    this.masterAlbumList.push(_newAlbum);
  }

  sendCartCountOver(_count: number) {
    this.cartCount = _count;
  }

  makePurchase() {
    for(var i=0; i < this.masterAlbumList.length; i++) {
      this.masterAlbumList[i].inCart = false;
    }
    this.cartCount = 0;
  }
}
