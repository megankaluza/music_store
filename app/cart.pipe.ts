import { Pipe, PipeTransform} from '@angular/core';
import {Album} from './album.model';

@Pipe ({
  name: "cart",
  pure: false
})

export class CartPipe implements PipeTransform {
  transform(input: Album[]) {
    var output: Album[] = [];
    for(var i = 0; i < input.length; i++) {
      if(input[i].inCart === true) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
