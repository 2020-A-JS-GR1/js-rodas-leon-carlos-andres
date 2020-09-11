import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearUsuarioComponentComponent } from './ruta-crear-usuario-component.component';

describe('RutaCrearUsuarioComponentComponent', () => {
  let component: RutaCrearUsuarioComponentComponent;
  let fixture: ComponentFixture<RutaCrearUsuarioComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearUsuarioComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearUsuarioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
