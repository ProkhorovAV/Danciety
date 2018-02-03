 import {Injectable} from '@angular/core'; 
// для загрузки файла
import { FileUploader , FileItem, ParsedResponseHeaders} from 'ng2-file-upload';



 @Injectable()
 export class LoadService{

 	private uploader:FileUploader;
    private callback:any;

	onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let data = JSON.parse(response); //success server response
        this.callback(data)
 
    }

    onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let error = JSON.parse(response); //error server response
    }
 	constructor(){

 		this.uploader = new FileUploader({
            url: 'http://localhost:4000/upload',
            headers: [{name:'Accept', value:'application/json'}],
            autoUpload: true,
        });
        this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
        this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);

 	}

 	getUpload(callback){

        this.callback=callback;
 		
 		return this.uploader
 	}

 	

 }