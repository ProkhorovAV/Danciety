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

	// скдалываем ошибки
	errorArray = []

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
     
		this.usersServices.getUserId(this.userData)
		
    	.subscribe(

                response => {
                    if (response.id===-1){ 
			      		 
			      		this.Materialize.toast('Не верное имя или пароль', 2000)

			      		return   

		     		}else{
		     			
		     			this.usersServices.setUser(response);

		     			this.Materialize.toast('Добрый день '+response.name, 1000)
		   
				        this.router.navigate(
				            ['/main']
				        );
		            }
                }, 
                err => {

                	console.log('Ошибка сервера');
                	this.errorArray.push(err);                    
                    console.log(this.errorArray);
                });

    	return ;
    }

    	
 

    // Регистрация
    goRegistr(){

		this.usersServices.RegistrUser(this.userData) 

        .subscribe(

     		response => { if(response.action==="done"){

				this.Materialize.toast('Вы успешно зарегистрировались', 2000)

				this.checketForm(this.userData.login,this.userData.password)

            }else{
            	this.Materialize.toast('Регистрация не прошла!', 2000)
            }
           }, 
            err => {

            	console.log('Ошибка сервера');
            	this.errorArray.push(err);                    
                console.log(this.errorArray);
            }
        );
    }
}
 