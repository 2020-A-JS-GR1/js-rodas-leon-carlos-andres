import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-lista-usuario',
  templateUrl: './ruta-lista-usuario.component.html',
  styleUrls: ['./ruta-lista-usuario.component.css']
})
export class RutaListaUsuarioComponent implements OnInit {

  arregloUsuarios = [];

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
  ) { }

  irAEditarUsuario(id: Number) {
    const ruta = ['/usuario', 'editar', id];
    this._router.navigate(ruta);
  }

  ngOnInit(): void {
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos
      .subscribe(
        (usuarios: any[])=> {
          this.arregloUsuarios = usuarios;
        },
        (error) => {
          console.error('Error', error)
    }
      )
  }

  eliminarUsuario(id: number){
    const obsEliminar = this._usuarioService.eliminar(id);
    obsEliminar.subscribe(
      () => {
        const indice = this.arregloUsuarios.findIndex(u => u.id === id);
        this.arregloUsuarios.splice(indice, 1);
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

}
