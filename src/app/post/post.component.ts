import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // L'array des posts est passé de AppComponent à PostComponent via la databinding grace aux "@Input()"
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  @Input() indexOfPst: number;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
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
