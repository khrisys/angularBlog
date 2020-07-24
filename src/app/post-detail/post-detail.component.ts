import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postTitle: string;
  postContent: string;
  postLoveIts: number;
  postDate: Date;

  /**
   *
   * @param postService : service PostService
   * @param route : route contient toutes les infos de la route active, et donc contient aussi les infos du fragment ':id' contenu dans
   * l'url
   */
  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  /**
   * A l'instanciation, cette classe prend l'id qui lui est passé comme param dans l'url, et l'utilise pour resoudre le name et
   * le status de cet user
   */
  ngOnInit(): void {
    const id = this.route.snapshot.params[+'id']; // Ici, l'id sera le nom du post
    this.postTitle = this.postService.getPostById(+id).postTitle; // le '+' devant 'id' va caster le string en number
    this.postContent = this.postService.getPostById(+id).postContent;
    this.postLoveIts = this.postService.getPostById(+id).postLoveIts;
    this.postDate = this.postService.getPostById(+id).postDate;


  }

  /*  onSubmit(form: NgForm) {
      const title = form.value['title'];
      const content = form.value['content'];
      const loveIts = form.value['loveIts'];
      this.postService.onAdd(title, content,loveIts);
      this.router.navigate(['/posts']);
    }*/

  onSingleLove() {

  }

  onSingleHate() {

  }
}
