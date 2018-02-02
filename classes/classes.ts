import { PostEnum } from '../classes/emuns';
import { IUser, IPhoto, IPost } from './interfaces';
import { DomSanitizer } from '@angular/platform-browser';

export class JobClass{
    id:number;
    idUser:number;
    status:PostEnum;
    name:string;
    text:string;
};

export class RegistrClass{
	login:string;
	password:string;
	email:string; 
}

export class User implements IUser{
	idUser:number = 0;
	img:IPhoto;
	login:string = "user";
	name:string = "user"
	password:string="user";
	email:string ="user@mail.com";
	date:Date;
	sex:boolean = false;
	phone:string = "";
	web:string =""; 
	text:string = "";

	constructor(){
		this.date = new Date(); 

	}
}

export class simplePost implements IPost{
 
 
	_id:number=-1;
	idUser:number=-1;
	idGroup:number=-1;
	caption:string="";
	date:Date = new Date();
	text:string="";
	images:string[]=[];
	videos:any[]=[]
	 

	constructor(private sanitizer:DomSanitizer){
		 
   
		console.log('Создан простой пост')
 
	}
 
	// добавдение фото
	addImages(fileName:string){

		this.images.push(fileName)

		return this

	}

	//удаление фото
	deliteImages(image:string){

		let index = this.images.indexOf(image)

 		this.images.splice(index, 1)

 		return this

	}

	// добавдение видео
	addVideos(fileName:string){

		console.log(fileName)

		// https://www.youtube.com/embed/pOTjCwDWlU4
		let urlArray = fileName.split('/')
 
		let fullUrlYoutube = "https://www.youtube.com/embed/"+urlArray[urlArray.length-1];
			 
 		let videoSerilize = this.sanitizer.bypassSecurityTrustResourceUrl(fullUrlYoutube);
			 
 		this.videos.push({
 			src:fullUrlYoutube,
 			iframe:videoSerilize
 			})
 

		return this

	}

	// удалить видео
	deliteVideos(video:any){

		let index = this.videos.indexOf(video)

 		this.videos.splice(index, 1)
 	}
 	/// *ngFor="let video of item.videos" [src]="video.iframe"

 	getPost(){

 		let srcVideo = [];

 		this.videos.forEach(function(a){
 			srcVideo.push(a.src)
 		})

 		let post = {

 			_id:this._id,
			idUser:this.idUser,
			idGroup: this.idGroup,
			caption: this.caption,
			date: new Date(),
			text: this.text,
			images: this.images,
			videos: srcVideo
 		}

 		return post;
 	}

 	// добавление id пользователя
 	setUserId(userId:number){
 		  
 		this.idUser = userId; 

 	}

 	// добавление id группы
 	setGroupId(groupId:number):void{
 		  
 		this.idGroup = groupId;
		 
 	}

}
 
