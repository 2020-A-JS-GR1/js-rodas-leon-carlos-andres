import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit {

  @Input()
  urlImagen: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  textoEjemplo = 'Avengers';
  urlEjemploImagen = 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_3adaf4f8.jpeg?region=0,0,540,810';
  linkTextoEjemplo = 'https://www.google.com';

  constructor() { }

  ngOnInit(): void {
  }

  ejemploFuncion(){
    alert('Hola!');
  }

  ejemploBlur(){
    console.log('Blur!');
  }

}
