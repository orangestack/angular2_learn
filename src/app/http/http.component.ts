import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
	json: any;
	loading: boolean;
	
  constructor(private http: Http) {
		this.loading = true;
	}

  ngOnInit() {
  }
	
	getMovieHttp(): void {
    this.loading = true;
    this.http.request('https://www.omdbapi.com/?t=Titanic')
      .subscribe((res: Response) => {
        this.json = res.json();
        this.loading = true;
      });
  }
}