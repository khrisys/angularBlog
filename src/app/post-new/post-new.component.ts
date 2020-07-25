import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {

  title: string;
  content: string;
  loveIts: number;
  postDate: Date;

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
  }

  onSubmit(form: NgForm) {
    const title = form.value['title'];
    const content = form.value['content'];
    const loveIts = form.value['loveIts'];
    this.postService.onAdd(title, content, loveIts); // la date de creation du posts sera ajoutée autiomatiqiuement à l'ajout du post dans la la liste des posts existants
    this.router.navigate(['/posts']);
  }

  onSingleLove() {
    this.loveIts += 1;
  }

  onSingleHate() {

  }
}
