import { Injectable } from '@angular/core';
import { Countries }  from "./countries";

@Injectable()
export class CountryService {

  constructor() { }
	
	getCountries(): Countries[]{
		return [
			{"name": "India", capital: "New Delhi"},
			{"name": "Russia", capital: "Moscow"},
			{"name": "USA", capital: "Washington D.C"},
		]
	}
}