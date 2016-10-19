import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-edit',
  template: `
  <div *ngIf="album2Edit">
    <h3>Edit {{album2Edit.title}}</h3>
    <div class="form-group">
      <label>Title:</label>
      <input [(ngModel)]="album2Edit.title">
    </div>
    <div class="form-group">
      <label>Artist:</label>
      <input [(ngModel)]="album2Edit.artist">
    </div>
    <div class="form-group">
      <label>Genre:</label>
      <input [(ngModel)]="album2Edit.genre">
    </div>
    <div class="form-group">
      <label>Price:</label>
      <input [(ngModel)]="album2Edit.price">
    </div>
    <button (click)="finishEdit()">Finished</button>
  </div>
  `
})


export class AlbumEditComponent {
  @Input() album2Edit: Album;
  @Output() finishEditSender = new EventEmitter();

  finishEdit() {
    this.finishEditSender.emit();
  }
}
