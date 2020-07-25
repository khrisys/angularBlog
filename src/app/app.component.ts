import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angularBlog';

  /*
    // Couche d'abstractiondes données
    posts: any[];
    postSubscription: Subscription;

    post: {
      title: string,
      content: string,
      loveIts: number,
      created_at: Date
    };
  */


  /**
   * Injection de dependances
   * @param router
   */
  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  /**
   * Redirige l'utilisateur vers la page de creation d'un post
   */
  goToNew() {
    this.router.navigate(['/new']);
  }
}
