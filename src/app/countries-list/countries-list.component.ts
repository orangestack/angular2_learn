import { Component, OnInit } from '@angular/core';

import {CountryService} from "../country.service";
import { Countries }  from "../countries";

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css'],
	
	providers: [CountryService]
})
export class CountriesListComponent implements OnInit {
	countries: Countries[] = [];
  constructor(private _countryService: CountryService) { 
		this.countries = _countryService.getCountries();
	}

  ngOnInit() {
  }

}