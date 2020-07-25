import {Subject} from 'rxjs/Subject';


export class PostService {

  // couche abstraction des données
  postSubject = new Subject<any[]>();
  dateOfPost = new Date();

  // les posts sont privés avec le Subject : concept du "ouvert à l'extension/fermé à la modification"
  private posts: any[] = [
    {
      id: 0,
      title: 'Mon premier post',
      content: 'Salut à la communauté !',
      loveIts: 0,
      created_at: this.dateOfPost
    },
    {
      id: 1,
      title: 'Mon second post',
      content: 'Rappel des infos !',
      loveIts: 0,
      created_at: this.dateOfPost
    },
    {
      id: 2,
      title: 'Mon troisieme post',
      content: 'f(x) = n -1; !',
      loveIts: 0,
      created_at: this.dateOfPost
    }
  ];

  constructor() {
  }

  // ===============================================================
  // Methodes personalisées uniquement destinées au composant "Post"
  // ===============================================================

  /**
   * Laisse un like sur un post
   * @param index
   */
  onLove(index: number) {
    this.posts[index].loveIts += 1;
    this.emitPostSubject();
  }

  /**
   * Enleve un like sur un post
   * @param index
   */
  onHate(index: number) {
    this.posts[index].loveIts -= 1;
    this.emitPostSubject();
  }

  /**
   * Ajouter un post à la liste des posts existants.
   * Il n'y a pas la date en param car elle est définie ici au moment du post
   *
   * @param title : titre du post
   * @param content : contenu du post
   * @param loveIts : like sur le post
   */
  onAdd(title: string, content: string, loveIts: number) {
    const postObject = {id: 0, title: '', content: '', loveIts: 0, created_at: null};

    // On recupere l'id du dernier element de la liste (avec le length -1) ausuel on rajoute 1 pour incrementer l'id
    postObject.id = this.posts[(this.posts.length - 1)].id + 1;
    postObject.title = title;
    postObject.content = content;
    postObject.loveIts = loveIts;
    postObject.created_at = new Date();
    this.posts.push(postObject);
    this.emitPostSubject();
  }

  /**
   * Suppression d'un post précis
   *
   * @param index
   */
  onDelete(index: number) {
    const post = this.posts[index];
    console.log(post, index);
    this.posts.splice(index, 1);
    // On emet le Subject qui fait appel à la couche d'abstraction des données
    this.emitPostSubject();
  }

  /**
   * Emet la liste des posts via la cuche d'abstraction Subject qui copie la liste des données post
   */
  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }

  /**
   * reuperation d'un post par son id, id passé en argument dans l'url
   *
   * @param id
   */
  getPostById(id: number) {
    const post = this.posts.find((postObject) => {
      return postObject.id === id;
    });
    return post;
  }
}
