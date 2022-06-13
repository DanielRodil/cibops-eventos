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
    this.verDatos(actividadoperativa);
    let url = `operaciones/actividadesoperativas/consultar/${actividadoperativa.eventoId}`;
    this.router.navigate([url])
  }

  verDatos(actividadoperativa: ActividadoperativaImpl): void {
    this.actividadoperativaVerDatos = actividadoperativa;
  }
  
}
