import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Live ....!!';  
  year:number = 2014;  
  userDetails: any = {"userId": "tiger", "password": "secret"};  
  corruptData: any;
	
	mobile = {"os": "Android", "model": "Lenovo A6000"};
	
	updateMobile(theModel: string){
		console.log("Updated Model is"+theModel);
		this.mobile['model'] = theModel;
		
	}
}