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
        <album-add
          (newAlbumSender) = "addAlbum($event)"
        ></album-add>
      </div>
      <div class="col-sm-offset-2 col-sm-5">
        <cart-display
          [cartList] = "masterAlbumList"
          [cartCount] = "cartCount"
          [cartCost] = "cartCost"
          (purchaseSender) = "makePurchase()"
        ></cart-display>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterAlbumList: Album[] = [
    new Album("Dark Side of the Moon", "Pink Floyd", "Rock", 9.99, "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"),
    new Album("Abbey Road", "The Beatles", "Rock", 15.99, "http://www.pocketfullofliberty.com/wp-content/uploads/2014/05/beatles-abbey-road.jpg"),
    new Album("Lemonade", "Beyonce", "Pop", 20.99, "http://pelicanmagazine.com.au/wp-content/uploads/2016/05/51144147.jpg"),
    new Album("Sevens Travels", "Atmosphere", "Hip-Hop", 5.99, "https://upload.wikimedia.org/wikipedia/en/a/a1/Seven\'s_Travels_(10_Year_Anniversary_Edition).png")
  ];

  public cartCount: number = 0;
  public cartCost: number = 0;

  deleteAlbum(_album: Album) {
    this.masterAlbumList.splice(this.masterAlbumList.indexOf(_album),1);
  }

  addAlbum(_newAlbum: Album) {
    this.masterAlbumList.push(_newAlbum);
  }

  sendCartCountOver(_count: number) {
    this.cartCount = _count;
    this.findTotalCost();
    console.log(this.cartCost);
  }

  makePurchase() {
    for(var i=0; i < this.masterAlbumList.length; i++) {
      this.masterAlbumList[i].inCart = false;
    }
    this.cartCount = 0;
  }

  findTotalCost() {
    this.cartCost = 0;
    for(var i=0; i < this.masterAlbumList.length; i++) {
      if(this.masterAlbumList[i].inCart === true) {
        this.cartCost += this.masterAlbumList[i].price;
      }
    }
  }

}
