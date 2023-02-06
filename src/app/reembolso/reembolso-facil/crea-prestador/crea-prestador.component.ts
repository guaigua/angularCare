import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crea-prestador',
  templateUrl: './crea-prestador.component.html',
  styleUrls: ['./crea-prestador.component.scss']
})
export class CreaPrestadorComponent implements OnInit {

  prestadorForm = this.fb.group({
    cpf: [''],
    prestador: [''],
    profisional: [''],
    codigo: [''],
    cep: [''],
    type_document: [''],
    endereco: [''],
    numero: [''],
    municipio: [''],
  });

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
  }

  prestadoSubmit(){}
}
