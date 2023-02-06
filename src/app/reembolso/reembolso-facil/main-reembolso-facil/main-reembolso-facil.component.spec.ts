import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReembolsoFacilComponent } from './main-reembolso-facil.component';

describe('MainReembolsoFacilComponent', () => {
  let component: MainReembolsoFacilComponent;
  let fixture: ComponentFixture<MainReembolsoFacilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainReembolsoFacilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainReembolsoFacilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
