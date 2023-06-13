import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCitasComponent } from './crear-citas.component';

describe('CrearCitasComponent', () => {
  let component: CrearCitasComponent;
  let fixture: ComponentFixture<CrearCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCitasComponent]
    });
    fixture = TestBed.createComponent(CrearCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
