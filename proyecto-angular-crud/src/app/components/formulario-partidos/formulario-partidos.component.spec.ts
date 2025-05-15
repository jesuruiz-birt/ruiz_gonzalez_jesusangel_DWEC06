import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPartidosComponent } from './formulario-partidos.component';

describe('FormularioPartidosComponent', () => {
  let component: FormularioPartidosComponent;
  let fixture: ComponentFixture<FormularioPartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioPartidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
