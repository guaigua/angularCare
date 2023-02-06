import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaPrestadorComponent } from './crea-prestador.component';

describe('CreaPrestadorComponent', () => {
  let component: CreaPrestadorComponent;
  let fixture: ComponentFixture<CreaPrestadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaPrestadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
