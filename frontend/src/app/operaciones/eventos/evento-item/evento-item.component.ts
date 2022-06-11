import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ActividadoperativaImpl } from '../../models/actividadoperativa-impl';
import { Evento } from '../../models/evento';
import { EventoImpl } from '../../models/evento-impl';
import { EventoService } from '../../service/evento.service';
import { OperacionService } from '../../service/operacion.service';

@Component({
  selector: 'app-evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faPencil = faPencil;
  faTrashCan = faTrashCan;

  @Input() evento: Evento = new EventoImpl();
  @Input() actividadoperativa: ActividadoperativaImpl = new ActividadoperativaImpl();

  constructor() { }
  
  ngOnInit(): void {
  }

}
