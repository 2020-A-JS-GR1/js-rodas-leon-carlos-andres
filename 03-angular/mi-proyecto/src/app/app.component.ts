import { Component } from '@angular/core';
import {UsuarioService} from "./servicios/usuario.service";

@Component({
  selector: 'aplicacion-nueva',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mi-proyecto';

  arregloPeliculas = [
    {
      id:1,
      url:'https://images-na.ssl-images-amazon.com/images/I/81En6m%2BG2%2BL._AC_SL1500_.jpg',
      desc:'Superheroes pierden',
      nombrePeli:'Avengers Infinity War'
    },
    {
      id:2,
      url:'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_3adaf4f8.jpeg?region=0,0,540,810',
      desc:'Superheroes se vengan del malo',
      nombrePeli:'Avengers Endgame'
    },
    {
      id:3,
      url:'https://lumiere-a.akamaihd.net/v1/images/p_mulan_update_ee3c77f3.jpeg?region=0%2C0%2C540%2C810',
      desc:'China salva al mundo con el poder de aceptar a las mujeres en el ejército',
      nombrePeli:'Mulán'
    },
    {
      id:4,
      url:'https://images-na.ssl-images-amazon.com/images/I/51py13PzjaL._SY445_.jpg',
      desc:'Esta vez es personal',
      nombrePeli:'Finding Dory'
    },
  ]

  arregloNumeros = [1,2,3]

// Inyectar Dependencias
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {
  }
  mensajeConsola(objeto: boolean) {
    console.log('Llego el evento', objeto);
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos
      .subscribe(
        (data)=>{ // THEN TRY
          console.log(data);
        },
        (error)=>{ // CATCH
          console.log(error);
        }
      );
  }

}
