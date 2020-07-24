import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-frame',
  templateUrl: './post-frame.component.html',
  styleUrls: ['./post-frame.component.css']
})
export class PostFrameComponent implements OnInit {

  posts: any[];
  postSubscription: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    // creer la subscritpion
    this.postSubscription = this.postService.postSubject.subscribe((posts: any[]) => {
      this.posts = posts;
    });
    // emettre le subject
    this.postService.emitPostSubject();
  }

}
