import { Component, OnInit } from '@angular/core';
import { ActividadoperativaImpl } from '../../models/actividadoperativa-impl';
import { GestionjudicialImpl } from '../../models/gestionjudicial-impl';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css']
})
export class EventoFormComponent implements OnInit {

  actividadoperativa: ActividadoperativaImpl = new ActividadoperativaImpl();
  gestionjudicial: GestionjudicialImpl = new GestionjudicialImpl();
  formulario: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
