import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperacionFormComponent } from './operaciones/operacion-form/operacion-form.component';
import { OperacionComponent } from './operaciones/operacion-consultar/operacion.component';
import { OperacioneditarComponent } from './operaciones/operacion-editar/operacioneditar.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { EventoFormComponent } from './eventos/evento-form/evento-form.component';

const routes: Routes = [
  {
    path: '',
    component: OperacionesComponent
  },
  {
    path: 'formularioOperacion',
    component: OperacionFormComponent
  },
  {
    path: 'formularioEvento',
    component: EventoFormComponent
  },
  {
    path: 'editar/:id',
    component: OperacioneditarComponent
  },
  {
    path: 'consultar/:id',
    component: OperacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacionesRoutingModule { }
