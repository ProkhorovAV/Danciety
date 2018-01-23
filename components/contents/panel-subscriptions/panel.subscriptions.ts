import { Component } from '@angular/core';

@Component({
  selector: 'panel-subscriptions',
  templateUrl:'panel.subscriptions.html' ,
  styleUrls: ['panel.subscriptions.css' ]
})
export class PanelSubscriptions {

	pagesLength:number = 70;
	// надо 4
	imagesSubscriptions:string[]=['img/face.png','img/face.png','img/face.png','img/face.png'] 
  	userLength:number = 140; 
  	// надо 4
  	subscribers:string[]=['img/face.png','img/face.png','img/face.png','img/face.png'] 
}
