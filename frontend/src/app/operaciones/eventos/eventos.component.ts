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
  gestionjudicialVerDatos: GestionjudicialImpl = new GestionjudicialImpl();

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
    this.actividadesOperativas = this.actividadesOperativas.filter((e) => actividadoperativa !== e);
    location.reload;
  }

  onActividadOperativaEditar(actividadoperativa: ActividadoperativaImpl){
    this.actividadoperativaVerDatos = actividadoperativa;
    let url = `operaciones/actividadesoperativas/editar/${actividadoperativa.eventoId}`;
    this.router.navigate([url])  
  }

  onGestionJudicialEliminar(gestionjudicial: GestionjudicialImpl){
    this.eventoService.deleteGestionJudicial(gestionjudicial.eventoId).subscribe();
    this.gestionesjudiciales = this.gestionesjudiciales.filter((e) => gestionjudicial !== e);
    location.reload;
  }

  onGestionJudicialEditar(gestionjudicial: GestionjudicialImpl){
    this.gestionjudicialVerDatos = gestionjudicial;
    let url = `operaciones/gestionesjudiciales/editar/${gestionjudicial.eventoId}`;
    this.router.navigate([url])  
  }
  
}
