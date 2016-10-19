import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-add',
  template: `
  <button *ngIf="!initiateAlbumCreation" (click)="initiateCreation()">New Album</button>
  <div *ngIf="initiateAlbumCreation">
    <div class="form-group">
      <label>Title:</label>
      <input #title>
    </div>
    <div class="form-group">
      <label>Artist:</label>
      <input #artist>
    </div>
    <div class="form-group">
      <select #genre>
        <option value="Rock" selected="selected">Genre</option>
        <option value="Rock">Rock</option>
        <option value="Hip-Hop">Hip-Hop</option>
        <option value="Pop">Pop</option>
        <option value="Classical">Classical</option>
        <option value="Electronic">Electronic</option>
        <option value='Folk/Blue-Grass/Country'>Folk/Blue-Grass/Country</option>
      </select>
    </div>
    <div class="form-group">
      <label>Price:</label>
      <input #price>
    </div>
    <button (click)="
      makeNewAlbum(title.value,artist.value,genre.value,price.value);
      title.value = '';
      genre.value ='';
      artist.value = '';
      price.value = '';
    ">Finished</button>
    <button (click)="
      cancelCreation();
      title.value = '';
      genre.value ='';
      artist.value = '';
      price.value = '';
    ">Cancel</button>
  </div>
  `
})

export class AlbumAddComponent {
  public initiateAlbumCreation: boolean = false;
  @Output() newAlbumSender = new EventEmitter();

  makeNewAlbum(_title: string, _artist: string,_genre: string, _price: number) {
    var newAlbum: Album = new Album(_title, _artist, _genre, _price);
    this.newAlbumSender.emit(newAlbum);
    this.initiateAlbumCreation = false;
  }

  initiateCreation() {
    this.initiateAlbumCreation = true;
  }

  cancelCreation() {
    this.initiateAlbumCreation = false;
  }
}
