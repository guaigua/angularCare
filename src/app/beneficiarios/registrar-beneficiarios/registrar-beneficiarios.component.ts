import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrar-beneficiarios',
  templateUrl: './registrar-beneficiarios.component.html',
  styleUrls: ['./registrar-beneficiarios.component.scss']
})
export class RegistrarBeneficiariosComponent implements OnInit {
  
  beneficiarioForm = this.fb.group({
    cpf: [''],
    emailParticular: [''],
    emailProfisional: [''],
    celular: [''],
  });

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
  }

  prestadoSubmit(){}
}
