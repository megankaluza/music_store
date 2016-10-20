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
      <label>Rating:</label>
      <input #newRating>
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
    if(name !== '' && rating !== null && review !== '') {
      var newReview: Review = new Review(name, rating, review);
      this.addReviewSender.emit(newReview);
    }
  }

}
