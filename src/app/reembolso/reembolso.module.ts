import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReembolsoFacilModule } from './reembolso-facil/reembolso-facil.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReembolsoFacilModule,
  ]
})
export class ReembolsoModule { }
