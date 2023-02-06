import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainReembolsoFacilComponent } from './main-reembolso-facil/main-reembolso-facil.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [
    MainReembolsoFacilComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class ReembolsoFacilModule { }
