import { Component, OnInit } from '@angular/core';
import { JuegoService } from 'src/app/services/juego.service';
import Juegos from 'src/app/models/juegos';

@Component({
  selector: 'app-add-juego',
  templateUrl: './add-juego.component.html',
  styleUrls: ['./add-juego.component.css']
})
export class AddJuegoComponent implements OnInit {

  juego: Juegos = new Juegos();
  submitted = false;

  constructor(private juegoService: JuegoService) { }

  ngOnInit(): void {
  }

  saveJuego(): void {
    this.juegoService.create(this.juego).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newJuego(): void {
    this.submitted = false;
    this.juego = new Juegos();
  }

}
