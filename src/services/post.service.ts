export class PostService {

  dateOfPost = new Date();

  posts = [
    {title: 'Mon premier post',
    content: 'Salut à la communauté !',
    loveIts: 0,
    created_at: this.dateOfPost},
    {title: 'Mon second post',
      content: 'Rappel des infos !',
      loveIts: 0,
      created_at: this.dateOfPost},
    {title: 'Mon premier post',
      content: 'f(x) = n -1; !',
      loveIts: 0,
      created_at: this.dateOfPost}
  ];


  // ===============================================================
  // Methodes personalisées uniquement destinées au composant "Post"
  // ===============================================================

  onLove(index: number){
    this.posts[index].loveIts += 1;
  }

  onHate(index: number){
    this.posts[index].loveIts -= 1;
  }
}
