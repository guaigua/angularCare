import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksFaturasComponent } from './links-faturas.component';

describe('LinksFaturasComponent', () => {
  let component: LinksFaturasComponent;
  let fixture: ComponentFixture<LinksFaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksFaturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksFaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
