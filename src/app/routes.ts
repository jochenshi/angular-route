import {Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';

export const routes : Routes = [
  {path : '',redirectTo:'search',pathMatch:'full'},
  {path:'search',component:SearchComponent},
  {path:'artists/:id',component:ArtistComponent},
  {path:'tracks/:id',component:TrackComponent},
  {path:'albums/:id',component:AlbumComponent}
];
