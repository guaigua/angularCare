import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from './shared/modules/material/material.module';
import { ReembolsoModule } from './reembolso/reembolso.module';
import { UtilsModule } from './utils/utils.module';
import { QuadroComponent } from './quadro/quadro.component';
import { BeneficiariosModule } from './beneficiarios/beneficiarios.module';

@NgModule({
  declarations: [
    AppComponent,
    QuadroComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReembolsoModule,
    BeneficiariosModule,
    MaterialModule,
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
