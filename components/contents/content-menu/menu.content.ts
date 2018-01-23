import { Component } from '@angular/core';
 
@Component({
  selector: 'content-menu',
  templateUrl:'menu.content.html',
  styleUrls: ['menu.content.css' ]
})
export class MenuContent {
   course={
   	imageUrl:["/img/background.png","/img/background-menu.png"]

   }

   name:string = "Андрей Глазунов";
   status:string = "тренер";
   subscriptions:number = 4558;
   subscribers:number = 526

   onWrite(){
   	console.log('Написать')
   }
   onSearch(){
   	console.log('Следить')
   }

   


}
