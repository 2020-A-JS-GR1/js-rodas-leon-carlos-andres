import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarUsuarioComponentComponent } from './ruta-editar-usuario-component.component';

describe('RutaEditarUsuarioComponentComponent', () => {
  let component: RutaEditarUsuarioComponentComponent;
  let fixture: ComponentFixture<RutaEditarUsuarioComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarUsuarioComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarUsuarioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
