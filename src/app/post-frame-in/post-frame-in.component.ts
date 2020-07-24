import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-frame-in',
  templateUrl: './post-frame-in.component.html',
  styleUrls: ['./post-frame-in.component.css']
})
export class PostFrameInComponent implements OnInit {

  // L'array des posts est passé de AppComponent à PostComponent via la databinding grace aux "@Input()"
  @Input() postId: number;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  @Input() indexOfPst: number;

  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit() {
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

  deletePost(index: number) {
    console.log('DeletePost');
    this.postService.onDelete(index);
    this.router.navigate(['/posts']);
  }
}
