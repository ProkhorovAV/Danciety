import { Component, Output, EventEmitter } from '@angular/core'
import { UsersService } from '../../../services/users.services';

interface ISubscriptions{
	name:string,
	imgSrc:string
}

@Component({
	selector:"header-menu",
	templateUrl:"menu.component.html",
	styleUrls:['menu.component.css']
})

export class MenuComponent{

	backgroundHeader:string="img/background-user.png";
	name:string= "unknow";
	textStatus:string="unknow"


	constructor(private usersServices:UsersService){

		let user = this.usersServices.getUser();
		this.name = user.name;
		this.textStatus = user.text; 

	}

	// закрытие внешнего меню
	@Output() closeMenu = new EventEmitter()

	onSubmit(){
		this.closeMenu.emit()
	}
	
	

	itemsSubscriptions:ISubscriptions[]=[{
		name:"Коля",
		 imgSrc:"img/face.png"
	},
	{
		name:"Коля",
		 imgSrc:"img/face.png"
	},
	{
		name:"Коля",
		 imgSrc:"img/face.png"
	}]

}

