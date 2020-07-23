import {Subject} from 'rxjs/Subject';

export class PostService {

  // couche abstraction des données
  postSubject = new Subject<any[]>();
  dateOfPost = new Date();

  // les posts sont privés avec le Subject : concept du "ouvert à l'extension/fermé à la modification"
  private posts: any[] = [
    {
      title: 'Mon premier post',
      content: 'Salut à la communauté !',
      loveIts: 0,
      created_at: this.dateOfPost
    },
    {
      title: 'Mon second post',
      content: 'Rappel des infos !',
      loveIts: 0,
      created_at: this.dateOfPost
    },
    {
      title: 'Mon premier post',
      content: 'f(x) = n -1; !',
      loveIts: 0,
      created_at: this.dateOfPost
    }
  ];


  // ===============================================================
  // Methodes personalisées uniquement destinées au composant "Post"
  // ===============================================================

  onLove(index: number) {
    this.posts[index].loveIts += 1;
    this.emitPostSubject();
  }

  onHate(index: number) {
    this.posts[index].loveIts -= 1;
    this.emitPostSubject();
  }

  /**
   * Emet la liste des posts via la cuche d'abstraction Subject qui copie la liste des données post
   */
  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }
}
