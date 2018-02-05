/*

Настройки

*/

import {Injectable} from '@angular/core';   
import { Http, Headers, RequestOptions,Response} from '@angular/http';
 
@Injectable()
export class SettingsService{

	// путь к серверу
	private urlServer:string = "http://localhost:4000";

	private urlServerUpload:string = 'http://localhost:4000/upload';

	private urlSetRegistrUser:string =  "http://localhost:4000/setRegistrUser";

	private urlGetUser:string = "http://localhost:4000/getUser";

	private nameLocalStorageUser:string = "user";

	private getAllPosts:string = "http://localhost:4000/getPosts";

	private setPostSimple:string = "http://localhost:4000/setPostSimple";

	private delitePostSimple:string = "http://localhost:4000/delitePostSimple/";
 
	private options:RequestOptions;

	constructor( private http:Http,
                 private settings:SettingsService){
 
            let headers = new Headers({ 'Content-Type': 'application/json' });

            this.options = new RequestOptions({ headers: headers });  
  
         }

    optionHTTP():RequestOptions{

    	return this.options
    }

	getUrlServer():string{

	 	return this.urlServer;

	}

	getUrlUpload():string{

	 	return this.urlServerUpload;

	}

	setRegistrUser():string{

		return this.urlSetRegistrUser;
	}

	getUser():string{

		return this.urlGetUser;

	}

	getLSUser():string{

		return this.nameLocalStorageUser

	}

	getPosts():string{

		return this.getAllPosts;
	}

	setPostS():string{

		return this.setPostSimple
	}

	dPostSimpleId(post: any):string{

		return this.delitePostSimple + post._id

	}
	

}