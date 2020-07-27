import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-frame',
  templateUrl: './post-frame.component.html',
  styleUrls: ['./post-frame.component.css']
})
export class PostFrameComponent implements OnInit, OnDestroy {

  posts: any[];
  // Il faut importer Observable, mais aussi
  //    * 'rxjs/Rx', et surtout, avec les MAJ qu'il y a eu dans RxJS, il faut installer le package 'rxjs-compat' pour
  //    * pouvoir utiliser cette methode 'interval'
  postSubscription: Subscription;

  constructor(private postService: PostService) {
  }

  /**
   * Executé au moment de la creation du component, mais apres l'execution du constructor
   *
   * Pour eviter tout pb lorsqu'on utilise des Observable perso, il est vivement conseillé d'utiliser la souscription via l'objet
   * Subscription
   */
  ngOnInit(): void {
    // creer la subscritpion
    this.postSubscription = this.postService.postSubject.subscribe((posts: any[]) => {
      this.posts = posts;
    });
    // emettre le subject
    this.postService.emitPostSubject();
  }

  /**
   * Methode permettant de detruire la souscription (grace à 'unsubscribe()') à la fin de vie du component, et empeche ainsi les
   * comportements innatendus liés aux Observable infinis
   */
  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

}
