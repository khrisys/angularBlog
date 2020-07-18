import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angularBlog';

  post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };

  posts: any[];

  /**
   * Declare le service
   * @param postService
   */
  constructor(private postService: PostService) {
  }

  /**
   * Initialise le service
   */
  ngOnInit(): void {
    this.posts = this.postService.posts;
  }

}
