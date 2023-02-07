import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarBeneficiariosComponent } from './beneficiarios/registrar-beneficiarios/registrar-beneficiarios.component';
import { QuadroComponent } from './quadro/quadro.component';
import { MainReembolsoFacilComponent } from './reembolso/reembolso-facil/main-reembolso-facil/main-reembolso-facil.component';


const routes: Routes = [
  { path: '', redirectTo: 'quadro', pathMatch: 'full' },
  { path: 'quadro', component: QuadroComponent },
  { path: 'registrarBeneficiários', component: RegistrarBeneficiariosComponent },
  { path: 'reembolsoFacil', component: MainReembolsoFacilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
