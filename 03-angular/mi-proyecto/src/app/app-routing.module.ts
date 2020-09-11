import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from './rutas/ruta-inicio/ruta-inicio.component';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaListaUsuarioComponent} from "./rutas/ruta-lista-usuario/ruta-lista-usuario.component";
import {RutaCrearUsuarioComponentComponent} from "./rutas/ruta-crear-usuario-component/ruta-crear-usuario-component.component";
import {RutaEditarUsuarioComponentComponent} from "./rutas/ruta-editar-usuario-component/ruta-editar-usuario-component.component";

const routes: Routes = [
  {
    component: RutaInicioComponent, // COMPONENTE
    path: 'inicio' // URL
  },
  {
    component: RutaLoginComponent, // COMPONENTE
    path: 'login' // URL
  },
  {
    component: RutaUsuarioComponent,
    path: 'usuario',
    children: [
      {
        path: 'lista',
        component: RutaListaUsuarioComponent
      },
      {
        path: 'crear',
        component: RutaCrearUsuarioComponentComponent
      },
      {
        path: 'editar/:id',
        component: RutaEditarUsuarioComponentComponent
      },
      {
        path: 'usuario',
        redirectTo: 'lista',
        pathMatch: 'full',
      }
    ]
  },
  { path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
