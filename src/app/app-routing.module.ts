import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainReembolsoFacilComponent } from './reembolso/reembolso-facil/main-reembolso-facil/main-reembolso-facil.component';


const routes: Routes = [
 
  { path: 'reembolsoFacil', component: MainReembolsoFacilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
