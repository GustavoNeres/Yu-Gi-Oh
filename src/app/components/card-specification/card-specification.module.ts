import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardSpecificationComponent } from './card-specification.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
    declarations: [CardSpecificationComponent],
    exports: [CardSpecificationComponent],
    schemas: [NO_ERRORS_SCHEMA],
    imports: [CommonModule, FormsModule, IonicModule,]
})
export class CardSpecificationModule { }
