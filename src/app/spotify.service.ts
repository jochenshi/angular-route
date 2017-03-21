import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class SpotifyService{
  static BASE_URL:string = 'https://api.spotify.com/v1';

  constructor(private http:Http){

  }

  query(URL:string,params ?:Array<string>):Observable<any[]>{
    let queryURL:string = `${SpotifyService.BASE_URL}${URL}`;
    if(params){
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    return this.http.request(queryURL).map((res:any) => res.json())
  }

  search(query:string,type:string){
    return this.query('/search',[
      `q=${query}`,
      `type=${type}`
    ])
  }

  searchTrack(query:string){
    return this.search(query,'track');
  }

  getTrack(id:string){
    return this.query(`/tracks/${id}`);
  }

  getArtist(id:string){
    return this.query(`/artists/${id}`);
  }

  getAlbum(id:string){
    return this.query(`/albums/${id}`);
  }
}

export var SPOTIFY_PROVIDERS:Array<any> = [
  {provide:SpotifyService,useClass:SpotifyService}
];