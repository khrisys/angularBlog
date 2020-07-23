import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';
import {PostComponent} from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angularBlog';
  // Couche d'abstractiondes données
  posts: PostComponent[];
  postSubscription: Subscription;

  post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };


  /**
   * Declare le service
   * @param postService
   */
  constructor(private postService: PostService) {
  }

  /**
   * Initialise le service
   * Dès la creation de l'objet PostComponent, il va se souscrire au Subject du service et il le fera emettre.
   */
  ngOnInit(): void {
    // creer la subscritpion
    this.postSubscription = this.postService.postSubject.subscribe((posts: PostComponent[]) => {
      this.posts = posts;
    });
    // emettre le subject
    this.postService.emitPostSubject();
  }

}
