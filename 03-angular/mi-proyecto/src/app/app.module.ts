import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import {HttpClientModule} from "@angular/common/http";
import {UsuarioService} from "./servicios/usuario.service";

@NgModule({
  declarations: [
    AppComponent,
    CartaPeliculaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UsuarioService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
