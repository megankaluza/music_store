import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list.component';
import { AlbumEditComponent  } from './album-edit.component';
import { AlbumAddComponent } from './album-add.component';
import { AlbumCheckboxComponent } from './album-checkbox.component';
import { CartDisplayComponent } from './cart-display.component'

import { GenrePipe } from './genre.pipe';
import { CartPipe } from './cart.pipe';


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
    AlbumCheckboxComponent,
    CartDisplayComponent,
    GenrePipe,
    CartPipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
