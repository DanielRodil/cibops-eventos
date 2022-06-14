import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperacionFormComponent } from './operaciones/operacion-form/operacion-form.component';
import { OperacionComponent } from './operaciones/operacion-consultar/operacion.component';
import { OperacioneditarComponent } from './operaciones/operacion-editar/operacioneditar.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { EventoFormComponent } from './eventos/evento-form/evento-form.component';
import { ActividadoperativaConsultarFormComponent } from './eventos-consultar/actividadoperativa-consultar-form/actividadoperativa-consultar-form.component';
import { GestionjudicialConsultarFormComponent } from './eventos-consultar/gestionjudicial-consultar-form/gestionjudicial-consultar-form.component';
import { ActividadoperativaEditarFormComponent } from './eventos/actividadoperativa-editar-form/actividadoperativa-editar-form.component';

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
    path: 'editar/:id',
    component: OperacioneditarComponent
  },
  {
    path: 'editar/:id/formularioEvento',
    component: EventoFormComponent
  },
  {
    path: 'consultar/:id',
    component: OperacionComponent
  },
  {
    path: 'actividadesoperativas/consultar/:id',
    component: ActividadoperativaConsultarFormComponent
  },
  {
    path: 'gestionesjudiciales/consultar/:id',
    component: GestionjudicialConsultarFormComponent
  },
  {
    path: 'actividadesoperativas/editar/:id',
    component: ActividadoperativaEditarFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacionesRoutingModule { }
