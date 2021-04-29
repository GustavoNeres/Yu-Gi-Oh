import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCardPage } from './list-card.page';

const routes: Routes = [
  {
    path: '',
    component: ListCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCardPageRoutingModule {}
