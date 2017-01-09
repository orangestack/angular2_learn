import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fruit-item',
  templateUrl: './fruit-item.component.html',
  styleUrls: ['./fruit-item.component.css']
})
export class FruitItemComponent implements OnInit {
	@Input() fruit: string;
	
  constructor() { }
  
	ngOnInit() {
  }
}