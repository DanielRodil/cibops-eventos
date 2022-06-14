import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadoperativaImpl } from '../models/actividadoperativa-impl';
import { GestionjudicialImpl } from '../models/gestionjudicial-impl';
import { EventoService } from '../service/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  actividadesOperativas: ActividadoperativaImpl[] = [];
  gestionesjudiciales: GestionjudicialImpl[] = [];
  actividadoperativaVerDatos: ActividadoperativaImpl = new ActividadoperativaImpl();

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private eventoService: EventoService) { }
  
  ngOnInit(): void {
    let id: string = this.activatedRoute.snapshot.params['id'];
    this.eventoService.getEventosOperacion(id).subscribe((res) => 
    this.actividadesOperativas = this.eventoService.extraerActividadesOperativas(res));
    this.eventoService.getEventosOperacion(id).subscribe((res) => 
    this.gestionesjudiciales = this.eventoService.extraerGestionesJudiciales(res));
  }
  
  onActividadOperativaEliminar(actividadoperativa: ActividadoperativaImpl){
    this.eventoService.deleteActividadOperativa(actividadoperativa.eventoId).subscribe();
  }

  onActividadOperativaEditar(actividadoperativa: ActividadoperativaImpl){
    this.actividadoperativaVerDatos = actividadoperativa;
    let url = `operaciones/actividadesoperativas/editar/${actividadoperativa.eventoId}`;
    this.router.navigate([url])  
  }

  onGestionJudicialEliminar(gestionjudicial: GestionjudicialImpl){
    this.eventoService.deleteGestionJudicial(gestionjudicial.eventoId).subscribe();
  }
  
}
