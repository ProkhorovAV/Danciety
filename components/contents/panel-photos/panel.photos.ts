import { Component } from '@angular/core';

@Component({
  selector: 'panel-photos',
  templateUrl:'panel.photos.html' ,
  styleUrls: ['panel.photos.css' ]
})
export class PanelPhotos{

	 pagesLength:number=32;
	 // надо две
	 imagesPhotos:string[]=['img/Photo.png','img/Photo.png']
}
