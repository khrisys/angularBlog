import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostService} from './services/post.service';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {PostFrameComponent} from './post-frame/post-frame.component';
import {PostFrameInComponent} from './post-frame-in/post-frame-in.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostNewComponent} from './post-new/post-new.component';

// Attention à bien respecter l'ordre de declaration des paths'
const appRoutes: Routes = [
  {path: 'posts', component: PostFrameComponent},
  {path: 'new', component: PostNewComponent},
  {path: ':id', component: PostDetailComponent},
  {path: 'posts/:id', component: PostDetailComponent},
  {path: '', component: PostFrameComponent}
];

@NgModule({
  'declarations': [
    AppComponent,
    PostFrameInComponent,
    PostFrameComponent,
    PostDetailComponent,
    PostNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
