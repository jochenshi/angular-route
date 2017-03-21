import { Component } from '@angular/core';
import {ActivatedRoute,} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  query : string;

  constructor(private route : ActivatedRoute){
    console.log(111);
    /*this.route
      .queryParams
      .subscribe(params => {this.query = params['query'] || '';console.log(this.query)})*/
  }
}
