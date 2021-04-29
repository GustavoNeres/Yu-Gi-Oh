import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import service from '../../service/decksAndCards.service'

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.page.html',
  styleUrls: ['./list-card.page.scss'],
})
export class ListCardPage implements OnInit {

  constructor(private route: ActivatedRoute) { }
  listDeck: any
  url: string;

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.route.params.subscribe(params => {
     this.url = params.deckname
    })
    this.listDeck = await service.getCardList(this.url)
    this.listDeck = this.listDeck.data.data
    console.log(this.listDeck)
  }
}
