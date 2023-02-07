import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainReembolsoFacilComponent } from './main-reembolso-facil/main-reembolso-facil.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FileUploadModule } from 'ng2-file-upload';
import { CreaPrestadorComponent } from './crea-prestador/crea-prestador.component';
import { BeneficiariosModule } from 'src/app/beneficiarios/beneficiarios.module';
import { LinksFaturasComponent } from './links-faturas/links-faturas.component';
@NgModule({
  declarations: [
    MainReembolsoFacilComponent,
    CreaPrestadorComponent,
    LinksFaturasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FileUploadModule,
    BeneficiariosModule
  ]
})
export class ReembolsoFacilModule { }
