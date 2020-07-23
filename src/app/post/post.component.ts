import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  // L'array des posts est passé de AppComponent à PostComponent via la databinding grace aux "@Input()"
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  @Input() indexOfPst: number;

  // couche abstraction de données avec  Subject
  posts: any[];
  postSubscription: Subscription;

  constructor(private postService: PostService) {
  }

  /**
   * Initailisation et souscription àla couche de données avec Subject, que l'on emet ensuite
   */
  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe((posts: any[]) => {
      this.posts = posts;
    });
    this.postService.emitPostSubject();
  }


  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }


  // ===============================================================
  // Methodes personalisées uniquement destinées au composant "Post"
  // ===============================================================
  onLove() {
    console.log('onLove');
    this.postService.onLove(this.indexOfPst);
  }

  onHate() {
    console.log('onHate');
    this.postService.onHate(this.indexOfPst);
  }

}
