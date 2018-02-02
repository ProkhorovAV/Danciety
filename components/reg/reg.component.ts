import { Component } from '@angular/core';
import { UsersService } from '../../services/users.services';
import { Postservices } from '../../services/posts.services';

import { Router } from '@angular/router'; 
import { PostEnum  } from '../../classes/emuns';

import { RegistrClass } from '../../classes/classes';

import { Observable } from 'rxjs/Observable';
  
import {WindowRef} from '../../services/window.service';

import 'rxjs/add/operator/catch';
 

@Component({
	selector: 'reg-component',
	templateUrl:'reg.component.html',
	styleUrls: ['reg.component.css'] 

})



export class AppReg {

	// переменная для формы
	windowsForm:boolean=true;

	// переменная для сообщений
	Materialize:any;

	// переменная для заднего фона
	backgroundImage = "img/login-image.jpg";

	// переменная для регистрации и входа
	userData:RegistrClass = {
		login:"",
		password:"",
		email:""
	}

	constructor( private usersServices:UsersService, 
				 private router: Router,
				 private postservices:Postservices,
				 private winRef: WindowRef) {

		this.Materialize = winRef.nativeWindow.Materialize; 
  
	}


	// функция смена формы
	checketForm(login:string = "", password:string = ""):boolean{

		this.windowsForm =! this.windowsForm;
		
		this.userData.email = ""
		
		this.userData.login = login
		
		this.userData.password = password

		return true;
 
	}
   
	 // Кнопка перехода на новую страницу
    goUser() {
    
    	//this.usersServices.addComment({})

		this.usersServices.getUserId(this.userData)
		
    	.subscribe(
                comments => {
                    // Emit list event
                     console.log(comments)
                }, 
                err => {
                	console.log('qw2eq')
                    // Log errors if any
                    console.log(err);
                });

    	return ;
    }

    	

/*
 
    	.map(response =>  {
     		 
    		return response.json()
    	})        
    	
 		
		 .subscribe(
 
            response => { 
 				 
					 
	      		if (response.id===-1){

		      		console.log('Не верный пароль')

		      		return   

	     		}else{
	     			
	     			this.usersServices.setUser(response)
	   
			        this.router.navigate(
			            ['/main']
			        );
	            }
           }
        ); 
 
*/
    

    // Регистрация
    goRegistr(){

		this.usersServices.RegistrUser(this.userData.login,this.userData.password,this.userData.email)

		.map(response => response.json() )

        .subscribe(

     		response => { if(response.action==="done"){

				this.Materialize.toast('Вы успешно зарегистрировались', 2000)

				this.checketForm(this.userData.login,this.userData.password)

            }else{
            	this.Materialize.toast('Регистрация не прошла!', 2000)
            }
           }
        );
    }
}
 