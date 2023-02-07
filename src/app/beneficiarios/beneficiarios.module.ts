import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarBeneficiariosComponent } from './registrar-beneficiarios/registrar-beneficiarios.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/modules/material/material.module';



@NgModule({
  declarations: [
    RegistrarBeneficiariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports:[
    RegistrarBeneficiariosComponent
  ]
})
export class BeneficiariosModule { }
