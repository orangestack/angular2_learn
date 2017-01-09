import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
	items: string[];
  showOffer: boolean;
	
  constructor() { 
		this.items = ["Apple", "Banana", "Grapes"];
		this.showOffer = false;
  }

  ngOnInit() {
  }
  
  toggle(): void {
		this.showOffer = !this.showOffer;
  }
}