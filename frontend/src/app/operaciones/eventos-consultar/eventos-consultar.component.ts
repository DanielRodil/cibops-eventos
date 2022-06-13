import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadoperativaImpl } from '../models/actividadoperativa-impl';
import { GestionjudicialImpl } from '../models/gestionjudicial-impl';
import { EventoService } from '../service/evento.service';

@Component({
  selector: 'app-eventos-consultar',
  templateUrl: './eventos-consultar.component.html',
  styleUrls: ['./eventos-consultar.component.css']
})
export class EventosConsultarComponent implements OnInit {

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
  
  onActividadOperativaConsultar(actividadoperativa: ActividadoperativaImpl){
    this.verDatosAO(actividadoperativa);
    let url = `operaciones/actividadesoperativas/consultar/${actividadoperativa.eventoId}`;
    this.router.navigate([url])
  }

  verDatosAO(actividadoperativa: ActividadoperativaImpl): void {
    this.actividadoperativaVerDatos = actividadoperativa;
  }

  onGestionJudicialConsultar(gestionjudicial: GestionjudicialImpl){
    this.verDatosGJ(gestionjudicial);
    let url = `operaciones/gestionesjudiciales/consultar/${gestionjudicial.eventoId}`;
    this.router.navigate([url])
  }

  verDatosGJ(gestionjudicial: GestionjudicialImpl): void {
    this.gestionjudicialVerDatos = gestionjudicial;
  }
  
}
