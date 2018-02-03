import {Injectable} from '@angular/core';   
   
 
@Injectable()
export class SettingsService{

	// путь к серверу
	 private urlServer:string = "http://localhost:4000";

	 getUrlServer():string{

	 	return this.urlServer
	 }

}