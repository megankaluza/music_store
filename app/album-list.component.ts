import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  template: `
  <h2>Select yo'<img src="resources/img/ice-cream.png" alt="Money">Flava.</h2>
  <select (change)="selectGenre($event.target.value)">
    <option value="All" selected="selected">Sort by Genre</option>
    <option value="All">All</option>
    <option value="Rock">Rock</option>
    <option value="Hip-Hop">Hip-Hop</option>
    <option value="Pop">Pop</option>
    <option value="Classical">Classical</option>
    <option value="Electronic">Electronic</option>
    <option value="Folk/Blue-Grass/Country">Folk/Blue-Grass/Country</option>
  </select>
  <div *ngFor="let currentAlbum of childAlbumList | genre:selectedGenre" class="panel">
    <album-checkbox [album]="currentAlbum" (changeCartCountSender)="carryCartCountUp($event)"></album-checkbox>
    <h4>{{currentAlbum.title}}</h4>
    <ul>
      <li>Artist: {{currentAlbum.artist}}</li>
      <li>Genre: {{currentAlbum.genre}}</li>
      <li>Price: {{currentAlbum.price}}</li>
    </ul>
    <button (click)="selectAlbum2Edit(currentAlbum)">Edit</button>
    <button (click)="deleteAlbum(currentAlbum)">Delete</button>
  </div>
  `
})

export class AlbumListComponent {
  @Input() childAlbumList: Album [];
  @Output() editSender = new EventEmitter();
  @Output() deleteSender = new EventEmitter();
  @Output() carryCartCountUpSender = new EventEmitter();

  public selectedGenre: string = "All";

  selectAlbum2Edit(_currentAlbum: Album) {
    this.editSender.emit(_currentAlbum);
  }

  deleteAlbum(_currentAlbum: Album) {
    this.deleteSender.emit(_currentAlbum);
  }

  selectGenre(_selectedGenre: string){
    this.selectedGenre = _selectedGenre;
  }

  carryCartCountUp(_count: number) {
    this.carryCartCountUpSender.emit(_count);
  }

}
