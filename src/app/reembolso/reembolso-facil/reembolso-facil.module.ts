import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainReembolsoFacilComponent } from './main-reembolso-facil/main-reembolso-facil.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

@NgModule({
  declarations: [
    MainReembolsoFacilComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class ReembolsoFacilModule { }
