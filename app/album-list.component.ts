import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  template: `
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
  <div *ngFor="let currentAlbum of childAlbumList | genre:selectedGenre">
    <h3>{{currentAlbum.title}}</h3>
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

}
