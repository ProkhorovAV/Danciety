import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';
import { HttpModule } from '@angular/http';
 
  
import { HeaderComponent } from '../components/header/header.component';
import { AppComponent } from './app.component';
import { ContentsComponent} from '../components/contents/contents.component';
import { MenuContent} from '../components/contents/content-menu/menu.content';
import { PanelRight } from '../components/contents/panel-right/panel.right';
import { PanelSubscriptions} from '../components/contents/panel-subscriptions/panel.subscriptions';
import { PanelPhotos} from '../components/contents/panel-photos/panel.photos';
import { PanelReviews} from '../components/contents/panel-reviews/panel.reviews';
import { PanelVideos} from '../components/contents/panel-videos/panel.videos';
import { NewsCreate} from '../components/contents/news-create/news.create';
import { NewsJob} from '../components/contents/news-job/news.job';
import { NewsPost} from '../components/contents/news-post/news.post';
import { MenuComponent} from '../components/header/menu/menu.component';
import { AppReg} from '../components/reg/reg.component';
import { MainComponent } from '../components/main/main.component'; 
import { PanelCenter} from '../components/contents/panel-center/panel.center';


import { UsersService } from '../services/users.services';
import { Postservices } from '../services/posts.services';
import { LoadService } from '../services/load.service'
// глобатьная переменная window для библиотеки material
import {WindowRef} from '../services/window.service';
// определение маршрутов
 
 
 
const appRoutes: Routes =[
    { path: 'main', component: MainComponent},
    { path: '', component: AppReg}
    
];

// для загрузки файлов
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
 
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentsComponent,
    MenuContent,
    PanelRight,
    PanelCenter,
    PanelSubscriptions,
    PanelPhotos,
    PanelReviews,
    PanelVideos,
    NewsCreate,
    NewsJob,
    NewsPost,
    MenuComponent,
    MainComponent,
    AppReg,
    FileSelectDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
     HttpModule,
    RouterModule.forRoot(appRoutes)
   
    
  ],
   providers: [
     UsersService,
     Postservices,
     LoadService,
     WindowRef

   ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
