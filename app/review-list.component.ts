import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';
import { Review } from './review.model';

@Component({
  selector: 'review-list',
  template: `
  <div *ngIf="triggerReviews">
    <h3>Reviews</h3>
    <div class="reviewDiv" *ngFor="let review of reviewedAlbum.reviewList">
      <p class="review-name">{{review.name}}</p>
      <ul>
        <li>{{review.rating}}</li>
        <li>{{review.review}}</li>
      </ul>
    </div>
    <review-add
      (addReviewSender)="addReview($event)"
    ></review-add>
  </div>
  `
})

export class ReviewListComponent {
  @Input() triggerReviews: boolean;
  @Input() reviewedAlbum: Album;

  addReview(_review: Review) {
    this.reviewedAlbum.reviewList.push(_review);
  }

}
