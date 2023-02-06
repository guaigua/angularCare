import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarBeneficiariosComponent } from './registrar-beneficiarios.component';

describe('RegistrarBeneficiariosComponent', () => {
  let component: RegistrarBeneficiariosComponent;
  let fixture: ComponentFixture<RegistrarBeneficiariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarBeneficiariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarBeneficiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
