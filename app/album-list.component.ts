import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  template: `
  <h2>Select yo'<img src="resources/img/ice-cream.png" alt="Money">Flava.</h2>
  <select-filter
    (genreSender)="selectGenre($event)"
  ></select-filter>
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
    <button (click)="toggleReviews(currentAlbum)">Reviews</button>
    <review-list
      [triggerReviews] = "showReviews"
      [reviewedAlbum] = "currentAlbum"
    ></review-list>
  </div>
  `
})

export class AlbumListComponent {
  @Input() childAlbumList: Album [];
  @Output() editSender = new EventEmitter();
  @Output() deleteSender = new EventEmitter();
  @Output() carryCartCountUpSender = new EventEmitter();

  public selectedGenre: string = "All";
  public showReviews: boolean = false;

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

  toggleReviews(_album: Album){
    if(this.showReviews === false){
      this.showReviews = true;
      _album.showReviews = true;
    }else{
      this.showReviews = false;
      _album.showReviews = false;
    }
  }

}
