import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: 'select-genre',
  template: `
  <div class="form-group">
    <select (click)="sendGenre($event.target.value)">
      <option value="Rock" selected="selected">Genre</option>
      <option value="Rock">Rock</option>
      <option value="Hip-Hop">Hip-Hop</option>
      <option value="Pop">Pop</option>
      <option value="Classical">Classical</option>
      <option value="Electronic">Electronic</option>
      <option value='Folk/Blue-Grass/Country'>Folk/Blue-Grass/Country</option>
    </select>
  </div>
  `
})

export class SelectGenreComponent {
  @Output() genreSender = new EventEmitter();
  sendGenre(genreInput) {
    this.genreSender.emit(genreInput);
  }
}
