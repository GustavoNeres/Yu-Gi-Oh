import { Component } from '@angular/core';
import { Router } from '@angular/router';
import decks from '../../data/decks.js'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  decks: Array<any>

  constructor(private route: Router) {}

  ionViewWillEnter(){
    this.decks = decks
  }

  goListCard(deck){
    this.route.navigate([
      'list-card',
      {deckname: deck.code}
    ])
  }
  

}
