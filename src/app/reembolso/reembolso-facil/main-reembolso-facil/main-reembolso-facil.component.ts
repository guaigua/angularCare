import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { DESPENSAS } from 'src/app/shared/lists/listDespensas';
import { ESPECIALIDADES } from 'src/app/shared/lists/listEspecialidade';
import { PRESTADORES } from 'src/app/shared/lists/listPrestador';
import { PROFISIONALES } from 'src/app/shared/lists/listProfisional';
import { FileUploader } from 'ng2-file-upload';
import { FormBuilder, Validators } from '@angular/forms';
import { BENEFICIARIOS } from 'src/app/shared/lists/listBeneficiario';

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
  beneficiarios = BENEFICIARIOS;
  
  reembolsoForm = this.fb.group({
    despensa: ['', [Validators.required]],
    especialidade: ['', [Validators.required]],
    prestador: ['', [Validators.required]],
    profisional: ['', [Validators.required]],
    beneficiario:[''],
    document: ['', [Validators.required]],
    file_64: [''],
    type_document: ['', [Validators.required]],
  });
  
  countrylist: any[] | undefined;
  selected: string = "";
  despensa: string = "";
  especialidade: string = "";
  profisional: string = "";
  prestador: string = "";

  constructor(
    private fb: FormBuilder,
  ) {}


  
  ngOnInit() {}

  public uploader:FileUploader = new FileUploader({
    url: "./",})

  reembolsoSubmit(){
    console.log(this.reembolsoForm.value);
  }

  openCreaPrestador(){
    console.log(name);
  }

}
