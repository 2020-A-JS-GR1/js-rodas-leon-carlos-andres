import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  @Output()
  eventoDioClicEnBoton:EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  eventoDioClicEnImagen:EventEmitter<boolean> = new EventEmitter<boolean>();

  textoEjemplo = 'Avengers';
  urlEjemploImagen = 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_3adaf4f8.jpeg?region=0,0,540,810';
  linkTextoEjemplo = 'https://www.google.com';

  constructor() { }

  ngOnInit(): void {
  }

  ejemploFuncion(){
    alert('Hola!');
  }

  ejecutarEventoDioClic(){
    this.eventoDioClicEnBoton.emit(true);
  }

  ejecutarEventoDIoClicImagen(){
    this.eventoDioClicEnImagen.emit(true);
  }


}
