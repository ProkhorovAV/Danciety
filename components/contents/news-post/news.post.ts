import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
	selector:'news-post',
	templateUrl:'news.post.html',
	styleUrls:['news.post.css']
})

export class NewsPost{
	   
	 
	@Input() item={} 

	// открытие меню
	isMenu = false;

	// путь для заг
	urlUploads = "http://localhost:4000/uploads/";

	// внешниее событие
	@Output() delitePost = new EventEmitter();

	// удалить пост
	delite(post:any){ 
  
		this.delitePost.emit(post)	
	}
  
  	

	 


	



}