import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacionesRoutingModule } from './operaciones-routing.module';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { OperacionItemComponent } from './operaciones/operacion-item/operacion-item.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OperacionFormComponent } from './operaciones/operacion-form/operacion-form.component';
import { OperacionComponent } from './operaciones/operacion/operacion.component';
import { OperacioneditarComponent } from './operaciones/operacioneditar/operacioneditar.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventoItemComponent } from './eventos/evento-item/evento-item.component';


@NgModule({
  declarations: [
    OperacionesComponent,
    OperacionItemComponent,
    OperacionFormComponent,
    OperacionComponent,
    OperacioneditarComponent,
    EventosComponent,
    EventoItemComponent
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
