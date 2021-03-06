import { Injectable } from '@angular/core';   
import { Http, Headers, RequestOptions,Response} from '@angular/http';
    
import { Observable } from 'rxjs/Observable';
import { RegistrClass, User } from '../classes/classes';
import { SettingsService } from "../services/settings.services";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
@Injectable()
export class UsersService{
 
    private user:User = new User();

    private options:RequestOptions;

    constructor( private http:Http,
                 private settings:SettingsService){
 
            let headers = new Headers({ 'Content-Type': 'application/json' });

            this.options = new RequestOptions({ headers: headers });  
  
         }
   
    // добавление пользователя в сервис и 
    // локаьное хранилище
    getUser():User{
        
        const token = localStorage.getItem(this.settings.getLSUser());

        if (token!=null) this.user = JSON.parse(token)

        return this.user
    }

    // записать пользователя в локальном хранилище
    setUser(user:User){

        this.user = user;

        let userSave = JSON.stringify(user)

        localStorage.setItem(this.settings.getLSUser(), userSave);
        
    }

   
    // регистрация пользователя
    RegistrUser(body:RegistrClass):Observable<any>{

        return this.postHTTP(body,this.settings.setRegistrUser())
     
    }
 
    //  получение данных о пользователе по паролю и логину
    getUserId(body:RegistrClass):Observable<any> {

        return this.postHTTP(body,this.settings.getUser())
 
    }

    // пост запрос
    postHTTP( body:RegistrClass , url:string ){

        return this.http
            .post(url, 
                body, 
                this.options
            )
            .map((res:Response) => res.json())

            .catch((error:any) => {

                Observable.throw('Server error')

                return error
            }) 
    }
 

}