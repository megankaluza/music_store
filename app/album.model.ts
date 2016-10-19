export class Album {
  public static idCount: number = 0;
  public static cartCount: number = 0;
  public id: number;
  public inCart: boolean;
  constructor (public title: string, public artist: string,public genre: string, public price: number) {
    this.id = Album.idCount++;
    this.inCart = false;
  }
}
