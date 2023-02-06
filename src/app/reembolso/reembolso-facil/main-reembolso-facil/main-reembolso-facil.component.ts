import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { DESPENSAS } from 'src/app/shared/lists/listDespensas';
import { ESPECIALIDADES } from 'src/app/shared/lists/listEspecialidade';
import { PRESTADORES } from 'src/app/shared/lists/listPrestador';
import { PROFISIONALES } from 'src/app/shared/lists/listProfisional';
@Component({
  selector: 'app-main-reembolso-facil',
  templateUrl: './main-reembolso-facil.component.html',
  styleUrls: ['./main-reembolso-facil.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})

export class MainReembolsoFacilComponent implements OnInit {
  despensas = DESPENSAS;
  especialidades = ESPECIALIDADES;
  prestadores = PRESTADORES;
  profisionales = PROFISIONALES;


  
  ngOnInit() { }



}
