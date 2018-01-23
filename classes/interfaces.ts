import { EKategoryVideo , PostEnum } from './emuns' 

// ответ на опросник
export interface IAnswer{
	id:number;
	name:string;
}
 
// опрос
export interface IInterview{
	id:number;
	userId:number;
	qustion:string;
	answer:IAnswer[];
	date:string;

}

// файлы 
export interface IFiles{
	id:number;
	userId:number;
	name:string;
	url:string;

}

// Подписчики
export interface ISubscriber{
	userId:number;
}

// Сообщения 
export interface IMessages{
	id:number;
	userId:number;
	userSend:number;
	text:string;
	files:IFiles[];
	date:string;
}
 
// видео
export interface IVideo{
	id:number;
	idUser:number;
	kategory:EKategoryVideo;
	title:string;
	text:string;
	url:string;
	date:string;	
	likes:number;
	looks:number;
	shares:number;
} 

// фото
export interface IPhoto{
	id:number; 
	idUser:number;
	title:string;
	text:string;
	url:string;
	date:string;
	likes:number;
	looks:number;
	shares:number;
}

// user
export interface IUser{
	idUser:number;
	img:IPhoto;
	login:string;
	name:string;
	password:string;
	email:string;
	date:Date;
	sex:boolean;
	phone:string;
	web:string; 
	text:string;

}

// группы
export interface IGroup{
	id:number;
	idUser:number;
	img:IPhoto;
	subscribers:ISubscriber[];
	name:string;
	date:string;
	photos:IPhoto[];
	videos:IVideo[];
	files:IFiles[];
	posts:IPost[];
}

// посты 
export interface IPost{
	_id:number;
	idUser:number;
	idGroup:number;
	caption:string;
	date:Date;
	text:string;
	//kategory:PostEnum;
	//photos:IPhoto[];
	//videos:IVideo[];
	//files:IFiles[];

}