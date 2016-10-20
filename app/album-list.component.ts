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
    <button (click)="toggleEdit(currentAlbum)">Edit</button>
    <button (click)="deleteAlbum(currentAlbum)">Delete</button>
    <button (click)="toggleReviews(currentAlbum)">Reviews</button>
    <review-list
      [triggerReviews] = "showReviews"
      [reviewedAlbum] = "currentAlbum"
    ></review-list>
    <album-edit
      [album2Edit] = "currentAlbum"
      [editTrigger] = "triggerEdit"
      (finishEditSender) = "finishEdit()"
    ></album-edit>
  </div>
  `
})

export class AlbumListComponent {
  @Input() childAlbumList: Album [];
  @Output() deleteSender = new EventEmitter();
  @Output() carryCartCountUpSender = new EventEmitter();

  public selectedGenre: string = "All";
  public showReviews: boolean = false;
  public triggerEdit: boolean = false;

  toggleEdit(_album: Album) {
    console.log("yo");
    if(_album.showEditForm) {
      this.triggerEdit = false;
      _album.showEditForm = false;
    } else {
      this.triggerEdit = true;
      _album.showEditForm = true;
    }
  }

  finishEdit() {
    console.log("fuck");
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
    if(!_album.showReviews){
      this.showReviews = true;
      _album.showReviews = true;
    }else{
      this.showReviews = false;
      _album.showReviews = false;
    }
  }

}
