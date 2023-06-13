import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCitasComponent } from './list-citas.component';

describe('ListCitasComponent', () => {
  let component: ListCitasComponent;
  let fixture: ComponentFixture<ListCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCitasComponent]
    });
    fixture = TestBed.createComponent(ListCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
