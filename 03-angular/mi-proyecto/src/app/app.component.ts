import {Component, OnInit} from '@angular/core';
import {UsuarioService} from './servicios/usuario.service';

@Component({
  selector: 'aplicacion-nueva',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mi-proyecto';
  habilitado = true;

  arregloPeliculas = [
    {
      id: 1,
      url: 'https://i.ytimg.com/vi/gn1pz0rnNHs/hqdefault.jpg',
      descripcion: 'Esta pelicula trata sobre la libertad',
      nombrePelicula: 'Libertad'
    },
    {
      id: 2,
      url: 'https://los40es00.epimg.net/los40/imagenes/2020/08/04/cinetv/1596531662_429948_1596533048_noticia_normal.jpg',
      descripcion: 'Pelicula de terror comun',
      nombrePelicula: 'HOST'
    },
    {
      id: 3,
      url: 'https://ep01.epimg.net/verne/imagenes/2019/01/15/mexico/1547520514_173827_1547524793_noticia_normal.jpg',
      descripcion: 'Comedia para todo el publico',
      nombrePelicula: 'Bitelchus'
    }
  ]

  arregloUsuarios = [];

  arregloObservables = [];

  arregloNumeros = [1, 2, 3]

  // Inyectar Dependencias
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {
  }
  ngOnInit() {
    this.mensajeConsola(true);
  }

  mensajeConsola(objeto: boolean) {
    console.log('Llego el evento', objeto);
    const observableTraerTodos = this._usuarioService.traerTodos();
    const suscripcion = observableTraerTodos
      .subscribe(
        (data) => { // THEN TRY
          this.arregloUsuarios = data as any[];
          console.log(data);
        },
        (error) => { // CATCH
          console.log(error);
        }
      );
    // this.arregloObservables.push(suscripcion);
    // this.arregloObservables.forEach(
    //   (suscripcion)=>{
    //     suscripcion.unsubscribe();
    //   }
    // )
    // suscripcion.unsubscribe();
  }

  crearUsuario() {
    const usuarioNuevo = {
      cedula: '1231231255',
      nombre: 'Naruto',
      apellido: 'Uzumaki'
    };
    const obsCrearUsuario = this._usuarioService
      .crear(usuarioNuevo);
    obsCrearUsuario
      .subscribe(
        (datos) => {
          console.log('Nuevo Usuario', datos)
          this.mensajeConsola(true);
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }

}
