import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  /**
   *
   * @param postService : service PostService
   * @param route : route contient toutes les infos de la route active, et donc contient aussi les infos du fragment ':id' contenu dans
   * l'url
   */
  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) {
  }

  /**
   * A l'instanciation, cette classe prend l'id qui lui est passé comme param dans l'url, et l'utilise pour resoudre le name et
   * le status de cet user
   */
  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; // Ici, l'id sera le nom du post (pas de "+" devant id , ici!!!
    this.title = this.postService.getPostById(+id).title; // le '+' devant 'id' va caster le string en number
    this.content = this.postService.getPostById(+id).content;
    this.loveIts = this.postService.getPostById(+id).loveIts;
    this.created_at = this.postService.getPostById(+id).created_at;


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

  /**
   * Redirige l'utilisateur vers la page de la la liste des posts
   */
  gotToPosts() {
    this.router.navigate(['/posts']);
  }
}
