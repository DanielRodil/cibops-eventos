import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperacionFormComponent } from './operacion-form/operacion-form.component';
import { OperacioneditarComponent } from './operaciones/operacioneditar/operacioneditar.component';
import { OperacionesComponent } from './operaciones/operaciones.component';

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
    path: ':id',
    component: OperacioneditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacionesRoutingModule { }
