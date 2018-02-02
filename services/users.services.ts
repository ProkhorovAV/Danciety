import {Injectable} from '@angular/core';  
import { User } from '../classes/classes';
 
import { Http, Headers, RequestOptions,Response} from '@angular/http';
 
 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { RegistrClass } from '../classes/classes';

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
////////////////////////////
     //  получение данных о пользователе по паролю и логину
    getUserId(body:RegistrClass):Observable<any> {
          
        var headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); // Create a request option
        //headers.append('Content-Type', 'application/json');
 
      
        return this.http
            .post(this.url+'/getUser', 
                body, 
                options
            )
            .map((res:Response) => res.json())
            .catch((error:any) => {
                Observable.throw('Server error')
                return error
            }) 
  
        
    }


    addComment (body: Object): Observable<Comment[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.url+'/getUser', body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')) //...errors if any
    }   




}