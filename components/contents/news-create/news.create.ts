import { Component, Output, EventEmitter, OnInit } from'@angular/core';
import { UsersService } from '../../../services/users.services'; 
import { simplePost } from '../../../classes/classes';
import { LoadService } from '../../../services/load.service';
 

// для загрузки файла
import { FileUploader , FileItem, ParsedResponseHeaders} from 'ng2-file-upload';


import { DomSanitizer } from '@angular/platform-browser';


@Component({
	selector: 'news-create',
	templateUrl:'news.create.html' ,
	styleUrls: ['news.create.css' ]
})
 
export class NewsCreate{
 
	// создание поста для отправки
	postData:simplePost;
 
	// путь для заг
	urlUploads = "http://localhost:4000/uploads/";

	// загрузка файлов
	uploader:FileUploader;
 
	//"https://youtu.be/e5-y_75xMHg";
  
	constructor( private userservice : UsersService,
		private loadService:LoadService,
		private _sanitizer: DomSanitizer  
		){

		this.postData = new simplePost(this._sanitizer);

  		this.postData.setUserId(this.userservice.getUser().idUser)

		let that = this; 

		// инициализация закгузки файлов
		this.uploader = loadService.getUpload(function(argument){
			 
			that.postData.addImages(argument.file.filename)
			 
		}) 
	}
   
	
	// внешниее событие
	@Output() post = new EventEmitter();
	
	// открыть панель для загрузки фотограйии
	isPhoto:boolean=false;

	onPhoto(){

		this.isPhoto = !this.isPhoto;
	}
	isVideo:boolean=false;
	onVideo(){ 

		this.isVideo = !this.isVideo;

	}
   
	onSettings(){
		console.log('Настройки')
	}
	

	// публикация поста
	onCreatePost(){
  
		  
		this.post.emit(this.postData.getPost())	
		
		this.postData = new simplePost(this._sanitizer);

  		this.postData.setUserId(this.userservice.getUser().idUser)

		 
	}



	
}
