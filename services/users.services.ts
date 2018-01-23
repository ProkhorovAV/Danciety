import {Injectable} from '@angular/core';  
import { User } from '../classes/classes';
//import { HttpHeaders, } from '@angular/common/http';
import { Http, Headers} from '@angular/http';
//import {  Response } from '@angular/http';
 
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{

    url:string = "http://localhost:4000"

    private user:User = new User()
   
    constructor( private http:Http){
 

         }
  

    // добавление пользователя в сервис и 
    // локаьное хранилище
    getUser():User{
        
        const token = localStorage.getItem('user');

        if (token!=null) this.user = JSON.parse(token)

        return this.user
    }

    // записать пользователя
    setUser(user:User){

        this.user = user;

        let userSave = JSON.stringify(user)

        localStorage.setItem('user', userSave);
        
    }

    // получение данных о пользователе по паролю и логину
    getUserId(login:string,password:string){
       
        let body = {
            login:login,
            password:password
        }
      
        var headers = new Headers();
          headers.append('Content-Type', 'application/json');
      
        return this.http
            .post(this.url+'/getUser', 
                body, 
                { headers: headers }
            )
        
    }
    // регистрация пользователя
    RegistrUser(login:string, password:string,email:string){
 
        let body = {
            login:login,
            password:password,
            email:email
        }
      
        var headers = new Headers();
          headers.append('Content-Type', 'application/json');
      
        return this.http
            .post(this.url+'/setRegistrUser', 
                body, 
                { headers: headers }
            )
    }
}