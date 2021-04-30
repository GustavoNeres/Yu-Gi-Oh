import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCardPageRoutingModule } from './list-card-routing.module';

import { ListCardPage } from './list-card.page';
import { CardSpecificationModule } from 'src/app/components/card-specification/card-specification.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCardPageRoutingModule,
    CardSpecificationModule
  ],
  declarations: [ListCardPage]
})
export class ListCardPageModule {}
