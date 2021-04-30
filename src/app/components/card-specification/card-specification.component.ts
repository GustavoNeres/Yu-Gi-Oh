import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import service from '../../service/decksAndCards.service'

@Component({
  selector: 'app-card-specification',
  templateUrl: './card-specification.component.html',
  styleUrls: ['./card-specification.component.scss'],
})
export class CardSpecificationComponent implements OnInit {
  @Input() id: number;
  cardDetails: any;

  constructor(private modalController: ModalController) { }

  async ngOnInit() {
    this.cardDetails = await service.getCard(this.id)
    this.cardDetails = this.cardDetails.data.data.pop()
  }

  close(){
    this.modalController.dismiss()
  }

  checkType(type){
    if(type === 'Trap Card' )
    return 'Carta Armadilha'
    if(type ===  'Tuner Monster')
    return 'Regulador / Efeito'
    if(type === 'Normal Monster')
    return 'Normal'
    if(type === 'Fusion Monster')
    return 'Fusão'
    if(type === 'Spell Card')
    return 'Carta Mágica'
    if(type === 'Effect Monster')
    return 'Monstro de Efeito'
    if(type === 'Gemini Monster')
    return  'Gêmeos / Efeito'
    if(type === 'XYZ Monster')
    return  ' Xyz / Efeito'
    if(type === 'Ritual Effect Monster')
    return  'Ritual / Efeito'
    if(type === 'Link Monster')
    return  'Link / Efeito'
    if(type === 'Synchro Monster')
    return  'Sincro / Efeito'
  }
}
