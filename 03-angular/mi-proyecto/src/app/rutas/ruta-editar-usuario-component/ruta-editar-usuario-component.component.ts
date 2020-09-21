import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-usuario-component',
  templateUrl: './ruta-editar-usuario-component.component.html',
  styleUrls: ['./ruta-editar-usuario-component.component.css']
})
export class RutaEditarUsuarioComponentComponent implements OnInit {
  usuario;
  mostrarFormulario = false;

  constructor( //  Inyectamos dependencias
    private readonly _usuarioService: UsuarioService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) {
  }

  // ruta-editar-usuario.component.ts
  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta
      .subscribe(
        (parametros) => { // try
          const id = Number(parametros.id);
          const obsUsuario = this._usuarioService
            .obtenerUnoPorId(id);
          obsUsuario
            .subscribe(
              (usuario: any) => {
                this.usuario = usuario;
                this.llenarFormularioConDatosDeUsuario();
              },
              (error) => {
                console.error('Error', error);
              }
            )
        }
      )
  }

  llenarFormularioConDatosDeUsuario() {
    this.mostrarFormulario = true;
  }

  editarUsuario(usuario){
    const obsEditarUsuario = this._usuarioService.editar(usuario, this.usuario.id)
    obsEditarUsuario.subscribe(
      (datos)=>{
        const url = ['/usuario', 'lista'];
        this._router.navigate(url);
      },
      (error)=>{
        console.error('Error', error)
      }
    )
  }

}
