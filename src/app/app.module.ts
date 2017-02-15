import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SearchComponent} from './components/search/search.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import { AppComponent }  from './app.component';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/albums/album.component';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule],
  declarations: [ AppComponent,SearchComponent,  NavbarComponent, AboutComponent, ArtistComponent, AlbumComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
