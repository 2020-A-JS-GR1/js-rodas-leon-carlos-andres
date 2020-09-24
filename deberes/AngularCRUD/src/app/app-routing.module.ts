import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuegoListComponent } from './components/juego-list/juego-list.component';
import { AddJuegoComponent } from './components/add-juego/add-juego.component';

const routes: Routes = [
  { path: '', redirectTo: 'juegos', pathMatch: 'full' },
  { path: 'juegos', component: JuegoListComponent },
  { path: 'add', component: AddJuegoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
