import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Albums for Days Yo</h1>
    <album-list
      [childAlbumList]="masterAlbumList"
      (editSender) = "selectAlbum2Edit($event)"
      (deleteSender) = "deleteAlbum($event)"
    ></album-list>
    <album-edit
      [album2Edit] = "selectedAlbum"
      (finishEditSender) = "finishEdit()"
    ></album-edit>
    <album-add
      (newAlbumSender) = "addAlbum($event)"
    ></album-add>
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
}
