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
import {Error404Component} from './error404/error404.component';
import {AuthService} from './services/auth-service';
import {AuthComponent} from './auth/auth.component';

// Attention à bien respecter l'ordre de declaration des paths'
const appRoutes: Routes = [
  {path: 'posts', component: PostFrameComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'new', component: PostNewComponent},
  {path: ':id', component: PostDetailComponent},
  {path: 'posts/:id', component: PostDetailComponent},
  {path: 'not-found', component: Error404Component},
  {path: '', component: PostFrameComponent},
  {path: '**', redirectTo: '/not-found'} // path wildcard : redirection vers la page 404. IL EST ESSENTIEL DE METTRE LE PATH WILDCARD A
  // LA FIN DES PATH, car Angular regarde les path dans l'rodre de declaration. Si le wildcard est au milieu du tab de path, si Angular
  // tombe sur le wildcard, n'importe quelle route correspond au wildcard, et donc, tous les urls rentrés vont correspondre à ce wildc
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
    PostService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
