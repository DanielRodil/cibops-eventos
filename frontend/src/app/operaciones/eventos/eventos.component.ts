import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadoperativaImpl } from '../models/actividadoperativa-impl';
import { Evento } from '../models/evento';
import { GestionjudicialImpl } from '../models/gestionjudicial-impl';
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
  gestionesjudiciales: GestionjudicialImpl[] = [];

  constructor(private operacionService: OperacionService,
              private activatedRoute: ActivatedRoute,
              private eventoService: EventoService,
              private router : Router) { }
  
  ngOnInit(): void {
    let id: string = this.activatedRoute.snapshot.params['id'];
    this.eventoService.getEventosOperacion(id).subscribe((res) => 
    this.actividadesOperativas = this.eventoService.extraerActividadesOperativas(res));
    this.eventoService.getEventosOperacion(id).subscribe((res) => 
    this.gestionesjudiciales = this.eventoService.extraerGestionesJudiciales(res));
  } 
  
}
