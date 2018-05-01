import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importamos el componente que queremos renderizar en el HTML principal
import {PaginaPrincipalComponent} from './material/pagina-principal/pagina-principal.component';

const routes: Routes = [
  {
    //Asignamos una nueva ruta del componente a renderizar
    path: 'pagina-principal',
    component: PaginaPrincipalComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
