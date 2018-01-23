import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl:'header.component.html' ,
  styleUrls: ['header.component.css' ]
})
export class HeaderComponent {
  	onMenu(){      
  		this.menu =! this.menu
  	}
  	onMail(){
  		console.log('mail')
  	}
  	onWorld(){
  		console.log('World')
  	}
  	onLogo(){
  		console.log('Logo')
  	}

    menu:boolean = false;
 
}
