import { PostEnum } from '../classes/emuns';
import { JobClass, simplePost }  from '../classes/classes';
import { IPost } from '../classes/interfaces';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
 import {Injectable} from '@angular/core';  
 import { DomSanitizer } from '@angular/platform-browser';
 
@Injectable()
export class Postservices{

	 url:string = "http://localhost:4000";

	 constructor(private http:Http,
	 	private sanitizer:DomSanitizer){

	 }

	posts:JobClass[]=[{
		id:0,
		idUser:1,
		status:PostEnum.Job,
		name:"Работа 1",
		text:"Сама работа ничего себе, только платят немного"
	},
	{
		id:1,
		idUser:1,
		status:PostEnum.Job,
		name:"Работа 2",
		text:"Сама работа ничего себе, только платят немного"
	},
	{
		id:2,
		idUser:2,
		status:PostEnum.Job,
		name:"Работа 3",
		text:"Сама работа ничего себе, только платят немного"
	}];

	getPosts():JobClass[]{

		return this.posts;

	}

	getPostsHttp(){

		return this.http.get(this.url+'/getPosts')
	}

	setPost(idUser:number, status:PostEnum,
			name:string,text:string){

		this.posts.push({
			id:this.posts.length,
			idUser:idUser,
			name:name,
			status:status,
			text:text
		})

	}

	// создание простого поста
	createPost(post:simplePost){

		console.log(post)
 
        var headers = new Headers();
            headers.append('Content-Type', 'application/json');
       
        return this.http
            .post(this.url+'/setPostSimple', 
                post, 
                { headers: headers }
            )
  
	}

	// удаление поста
	delitePost(post:any){
		// класс simplePost замена на any для _id

		console.log(post)

        var headers = new Headers();
            headers.append('Content-Type', 'application/json');
       
        return this.http
            .delete(this.url+'/delitePostSimple/'+post._id, 
                { headers: headers }
            )

	}

	//получение расшифрованного текста
 	getPostSanitizer(posts:simplePost[]){
 
 		let that =this
 
 		posts.forEach(function(argument,index){

 			if (argument.videos.length < 1) return 

 			let normalize:any[] = [];

			argument.videos.forEach(function(video){

				let fullUrlYoutube:any = video;
	 
				let videoSerilize = that.sanitizer.bypassSecurityTrustResourceUrl(fullUrlYoutube);
 
				let obj:any = {
	 				src:fullUrlYoutube,
	 				iframe:videoSerilize
	 			}

	 			normalize.push(obj)
 
			})

			posts[index].videos =  normalize
 
 			 
 		})

 		return posts

 	}

}