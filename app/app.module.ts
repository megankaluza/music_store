import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list.component';
import { AlbumEditComponent  } from './album-edit.component';
import { AlbumAddComponent } from './album-add.component';

import { GenrePipe } from './genre.pipe';


@NgModule ({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumEditComponent,
    AlbumAddComponent,
    GenrePipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
