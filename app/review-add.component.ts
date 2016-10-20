import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';
import { Review } from './review.model';

@Component({
  selector: 'review-add',
  template: `
  <button (click)="displayAddForm()">New Review</button>
  <div class="new-review" *ngIf="showForm">
    <div class="form-group">
      <label>Your name:</label>
      <input #newName>
    </div>
    <div class="form-group">
      <label>Star Rating (1-5):</label>
      <select #newRating>
        <option value="1">&#9734; </option>
        <option value="2">&#9734; &#9734; </option>
        <option value="3">&#9734; &#9734; &#9734; </option>
        <option value="4">&#9734; &#9734; &#9734; &#9734; </option>
        <option value="5">&#9734; &#9734; &#9734; &#9734; &#9734; </option>
      </select>
    </div>
    <div class="form-group">
      <label>Review:</label>
      <input #newReview>
    </div>
    <button (click)="
      makeReview(newName.value, newRating.value, newReview.value);
      newName.value='';
      newRating.value='';
      newReview.value='';
    ">Submit</button>
  </div>
  `
})

export class ReviewAddComponent {
  public showForm: boolean = false;
  @Output() addReviewSender = new EventEmitter();

  displayAddForm() {
    if(this.showForm) {
      this.showForm = false;
    } else {
      this.showForm = true;
    }
  }

  makeReview(name: string, rating: number, review: string) {
    if(name !== '' && review !== '') {
      var imageCount = [];
      for(var i = 0; i < rating; i++) {
        imageCount.push(i);
      }
      var newReview: Review = new Review(name, imageCount, review);
      this.addReviewSender.emit(newReview);
    }
    this.showForm = false;
  }

}
