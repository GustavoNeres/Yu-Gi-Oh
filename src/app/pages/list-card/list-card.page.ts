import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CardSpecificationComponent } from 'src/app/components/card-specification/card-specification.component';
import service from '../../service/decksAndCards.service'

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.page.html',
  styleUrls: ['./list-card.page.scss'],
})
export class ListCardPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private modalController: ModalController
    ) { }
  listDeck: any
  url: string;
  filter: string = 'Todas'

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.route.params.subscribe(params => {
     this.url = params.deckname
    })
    this.listDeck = await service.getCardList(this.url)
    this.listDeck = this.listDeck.data.data
  }

  truncate(string){
      return string.substring(0, 70)
  }

  async viewCardSpecification(card) {
    const modal = await this.modalController.create({
    component: CardSpecificationComponent,
    componentProps: { id : card.id }
    });
  
    await modal.present();
  }

  async filterCards(filter){
    this.listDeck = await service.getCardList(this.url)
    this.listDeck = this.listDeck.data.data
    this.filter = filter

    if(this.filter === 'Todas'){
    return this.listDeck
  }
  if(this.filter === 'Mágicas'){
    this.listDeck = this.listDeck.filter(s => s.type === 'Spell Card')
  }
  if(this.filter === 'Armadilha'){
    this.listDeck = this.listDeck.filter(s => s.type === 'Trap Card')
  }
  if(this.filter === 'Monstor'){
    this.listDeck = this.listDeck.filter(s => s.atk >= 0)
  }
}
}
