import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCardPageRoutingModule } from './list-card-routing.module';

import { ListCardPage } from './list-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCardPageRoutingModule
  ],
  declarations: [ListCardPage]
})
export class ListCardPageModule {}
