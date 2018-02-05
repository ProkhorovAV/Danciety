import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl:'header.component.html' ,
  styleUrls: ['header.component.css' ]
})
export class HeaderComponent {

    menu:boolean = false;
    
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

    
 
}
