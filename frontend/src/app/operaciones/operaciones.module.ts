import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacionesRoutingModule } from './operaciones-routing.module';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { OperacionItemComponent } from './operaciones/operacion-item/operacion-item.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OperacionFormComponent } from './operaciones/operacion-form/operacion-form.component';
import { OperacionComponent } from './operaciones/operacion-consultar/operacion.component';
import { OperacioneditarComponent } from './operaciones/operacion-editar/operacioneditar.component';
import { EventosComponent } from './eventos/eventos.component';
import { ActividadoperativaItemComponent } from './eventos/actividadoperativa-item/actividadoperativa-item.component';
import { GestionjudicialItemComponent } from './eventos/gestionjudicial-item/gestionjudicial-item.component';
import { EventosConsultarComponent } from './eventos-consultar/eventos-consultar.component';
import { ActividadoperativaConsultarComponent } from './eventos-consultar/actividadoperativa-consultar/actividadoperativa-consultar.component';
import { GestionjudicialConsultarComponent } from './eventos-consultar/gestionjudicial-consultar/gestionjudicial-consultar.component';
import { EventoFormComponent } from './eventos/evento-form/evento-form.component';
import { GestionjudicialConsultarFormComponent } from './eventos-consultar/gestionjudicial-consultar-form/gestionjudicial-consultar-form.component';
import { ActividadoperativaConsultarFormComponent } from './eventos-consultar/actividadoperativa-consultar-form/actividadoperativa-consultar-form.component';
import { ActividadoperativaEditarFormComponent } from './eventos/actividadoperativa-editar-form/actividadoperativa-editar-form.component';
import { GestionjudicialEditarFormComponent } from './eventos/gestionjudicial-editar-form/gestionjudicial-editar-form.component';
import { AgentesComponent } from './agentes/agentes.component';
import { AgenteItemComponent } from './agentes/agente-item/agente-item.component';


@NgModule({
  declarations: [
    OperacionesComponent,
    OperacionItemComponent,
    OperacionFormComponent,
    OperacionComponent,
    OperacioneditarComponent,
    EventosComponent,
    GestionjudicialItemComponent,
    ActividadoperativaItemComponent,
    EventosConsultarComponent,
    ActividadoperativaConsultarComponent,
    GestionjudicialConsultarComponent,
    EventoFormComponent,
    GestionjudicialConsultarFormComponent,
    ActividadoperativaConsultarFormComponent,
    ActividadoperativaEditarFormComponent,
    GestionjudicialEditarFormComponent,
    AgentesComponent,
    AgenteItemComponent
  ],
  imports: [
    CommonModule,
    OperacionesRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: []
})
export class OperacionesModule { }
