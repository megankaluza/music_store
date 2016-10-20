import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-add',
  template: `
  <button *ngIf="!initiateAlbumCreation" (click)="initiateCreation()">New Album</button>
  <div *ngIf="initiateAlbumCreation" class="panel">
  <h2>Add: New Album</h2>
  <hr>
    <div class="form-group">
      <label>Title:</label>
      <input #title>
    </div>
    <div class="form-group">
      <label>Artist:</label>
      <input #artist>
    </div>
    <select-genre
      (genreSender)="setGenre($event)"
    ></select-genre>
    <div class="form-group">
      <label>Price:</label>
      <input #price>
    </div>
    <div class="form-group">
      <label>Image URL:</label>
      <input #imageUrl>
    </div>
    <button (click)="
      makeNewAlbum(title.value,artist.value,price.value,imageUrl.value);
      title.value = '';
      artist.value = '';
      price.value = '';
      imageUrl.value = '';
    ">Finished</button>
    <button (click)="
      cancelCreation();
      title.value = '';
      artist.value = '';
      price.value = '';
      imageUrl.value = '';
    ">Cancel</button>
  </div>
  `
})

export class AlbumAddComponent {
  public initiateAlbumCreation: boolean = false;
  public newGenre: string = 'Rock';
  @Output() newAlbumSender = new EventEmitter();

  makeNewAlbum(_title: string, _artist: string, _price: number, _imageUrl: string) {
    if(_title !== '' && _artist !== '') {
      var newAlbum: Album = new Album(_title, _artist, this.newGenre, _price, _imageUrl);
      this.newAlbumSender.emit(newAlbum);
      this.initiateAlbumCreation = false;
    }
  }

  initiateCreation() {
    this.initiateAlbumCreation = true;
  }

  cancelCreation() {
    this.initiateAlbumCreation = false;
  }

  setGenre(genreInput: string) {
    this.newGenre = genreInput;
  }
}
