import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActividadoperativaImpl } from '../models/actividadoperativa-impl';
import { Evento } from '../models/evento';
import { EventoService } from '../service/evento.service';
import { OperacionService } from '../service/operacion.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: Evento[] = [];
  actividadesOperativas: ActividadoperativaImpl[] = [];

  constructor(private operacionService: OperacionService,
              private eventoService: EventoService,
              private router : Router) { }
  
  ngOnInit(): void {
    this.eventoService.getEventosOp1().subscribe((res) => 
    this.actividadesOperativas = this.eventoService.extraerAOOp1(res));
  }

  
}
