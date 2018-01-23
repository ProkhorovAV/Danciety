import { Component } from '@angular/core';

@Component({
  selector: 'panel-reviews',
  templateUrl:'panel.reviews.html' ,
  styleUrls: ['panel.reviews.css' ]
})
export class PanelReviews{

	items:IReviews[]=[{
		imgSrc:"img/face.png",
		name:"Анна Болотова",
		text:"Работали вместе в Китае (Шанхай) очень интересно"
	}]

	reviews={
		plus:15,
		minus:3
	}
 
}

interface IReviews{
	name:string,
	text:string,
	imgSrc:string
}
