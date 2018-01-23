import { Component, Input } from '@angular/core';
import { JobClass }  from '../../../classes/classes';

@Component({
	selector:'news-job',
	templateUrl:'news.job.html',
	styleUrls:['news.job.css']
})

export class NewsJob{

	@Input() item:JobClass[];

	itemJob:IitemJob={
		status:"Занят",
		text:"Не следует, однако забывать, что начало повседневной работы по формированию позиции в значительной степени обуславливает создание систем массового участия. Таким образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации систем массового участия. Не следует, однако забывать, что начало "
	}
	 
}

interface IitemJob{
	status:string,
	text:string
}