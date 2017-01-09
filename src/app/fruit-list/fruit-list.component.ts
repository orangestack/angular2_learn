import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {

  fruits: string[];

  constructor() {
    this.fruits = ['Banana', 'Grapes', 'Gauva', 'Mango'];
  }
	
	ngOnInit() {
  }
}