import { Component, OnInit } from '@angular/core';
import { DESPENSAS } from 'src/app/shared/lists/listDespensas';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  despensas = DESPENSAS;

  constructor() { }

  ngOnInit(): void {
  }

}
