import { Component, Output, EventEmitter, OnInit } from'@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { UsersService } from '../../../services/users.services'; 
import { simplePost } from '../../../classes/classes';
import { LoadService } from '../../../services/load.service';
 

// для загрузки файла
import { FileUploader , FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
 

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

	// открыть панель для загрузки фотограйии
	isPhoto:boolean=false;

	// открыта панетль видео
	isVideo:boolean=false;
 
	//"https://youtu.be/e5-y_75xMHg";
  
	constructor( private userservice : UsersService,
				 private loadService:LoadService,
				 private _sanitizer: DomSanitizer  
		){

		this.postData = new simplePost(this._sanitizer);

  		this.postData.setUserId(this.userservice.getUser().idUser)

		let that = this; 

		// инициализация загузки файлов
		this.uploader = loadService.getUpload((argument) => that.postData.addImages(argument.file.filename)) 

	}
   
	
	// внешниее событие
	@Output() post = new EventEmitter();
	
	 
	onPhoto(){

		this.isPhoto = !this.isPhoto;
	}
	
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
