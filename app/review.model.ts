export class Review {
  public static idCount: number = 0;
  public id: number;
  constructor(public name: string, public rating: number, public review: string) {
    this.id = Review.idCount++;
  }
}
