/*

загрузка файлов на сервер
 
*/

import {Injectable} from '@angular/core'; 

import { SettingsService } from '../services/settings.services';

// для загрузки файла
import { FileUploader , FileItem, ParsedResponseHeaders} from 'ng2-file-upload';



 @Injectable()
 export class LoadService{

 	private uploader:FileUploader;
    private callback:any;

    // при успешной загрузке на сервер
	onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {

        let data = JSON.parse(response);  

        // возбращаем ответ
        this.callback(data)
 
    }

    onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {

        let error = JSON.parse(response);

        console.log("Ошибка загрузки файла!!!");

        console.log(error);  

    }
  

 	constructor( private settings:SettingsService ){

         // создаем загрузчик
 		this.uploader = new FileUploader({
            url: this.settings.getUrlUpload(),
            headers: [{name:'Accept', value:'application/json'}],
            autoUpload: true,
        });

        // определяем ошибку или успех 
        this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
        this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);

 	}




 	getUpload(callback){

        this.callback = callback;
 		
 		return this.uploader
 	}

 	

 }