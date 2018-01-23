import { Component } from '@angular/core';
import { Postservices }  from '../../../services/posts.services'
import { simplePost }  from '../../../classes/classes';
import { PostEnum } from '../../../classes/emuns';
import { UsersService } from '../../../services/users.services';
import { IPost } from '../../../classes/interfaces';

import 'rxjs/add/operator/map';

@Component({
  selector: 'panel-center',
  templateUrl:'panel.center.html' ,
  styleUrls: ['panel.center.css' ]
})
export class PanelCenter {
 
	posts:simplePost[]=[]
  	 
  	constructor(private postservices:Postservices,
  	 		
        private usersService:UsersService ){
 

  	 		let userId = this.usersService.getUser().idUser;
  	 		 
        this.postservices.getPostsHttp()
        .map(response => response.json() )
        .subscribe(
          response =>{
                 
              this.posts =  this.postservices.getPostSanitizer(response)
  

          }

          )
 
  	}

    // создание поста
  postCreate(post:simplePost){

    this.postservices.createPost(post)
    
    .map(response => response.json() )
        .subscribe(
          response =>{
              if(response.action==="done"){

                let postsArray = [];

                postsArray = postsArray.concat(response.post,this.posts  )
 
                this.posts = postsArray;
                

              } 
          }

          )
 
  }

  // удаление поста
  delitePost(post:simplePost){

      this.postservices.delitePost(post)
       .map(response => response.json() )
        .subscribe(
          response =>{ 
            if (response.action=="done"){

  
              let index = -1;

            this.posts.forEach(function(argument,_index){
                if (argument._id==response.post._id){
                 index=_index
                }
            })
             
            this.posts.splice(index,1);
              

            }else{
              console.log(response)
            }
                
                
               
          }

          )
  }


}
