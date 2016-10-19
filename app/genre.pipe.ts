import {Pipe, PipeTransform} from '@angular/core';
import { Album } from './album.model';

@Pipe({
  name: "genre",
  pure: false

})

export class GenrePipe implements PipeTransform {
  transform(input: Album [], genreSelector: string){
    if(genreSelector === "All"){
      return input;
    }
    console.log(input);
    var output: Album [] = [];
    for(var i = 0; i < input.length; i++){
      if(input[i].genre === genreSelector){
        console.log(input[i]);
        output.push(input[i]);
      }
    }
    return output;
  }
}
